#!/usr/bin/env bash
# بناء تطبيق الأندرويد (APK) من غير Android Studio
# المطلوب على Ubuntu: apt-get install aapt android-sdk-platform-23 dalvik-exchange zipalign apksigner
# الاستخدام: KEYSTORE=/path/key.jks KS_PASS=... ./build.sh
set -euo pipefail
cd "$(dirname "$0")"
ANDROID_JAR=${ANDROID_JAR:-/usr/lib/android-sdk/platforms/android-23/android.jar}
KEYSTORE=${KEYSTORE:?اكتب مسار ملف التوقيع في KEYSTORE}
KS_PASS=${KS_PASS:?اكتب كلمة سر ملف التوقيع في KS_PASS}
OUT=build
rm -rf "$OUT" && mkdir -p "$OUT/gen" "$OUT/obj"

aapt package -f -m -J "$OUT/gen" -M AndroidManifest.xml -S res -I "$ANDROID_JAR" -F "$OUT/app.unaligned.apk"
javac -nowarn --release 8 -classpath "$ANDROID_JAR" -d "$OUT/obj" $(find src "$OUT/gen" -name '*.java')
${DX:-$(command -v dx || command -v dalvik-exchange)} --dex --output="$OUT/classes.dex" "$OUT/obj"
(cd "$OUT" && aapt add app.unaligned.apk classes.dex >/dev/null)
zipalign -f 4 "$OUT/app.unaligned.apk" "$OUT/app.aligned.apk"
apksigner sign --ks "$KEYSTORE" --ks-pass "pass:$KS_PASS" --out "$OUT/fabric-office.apk" "$OUT/app.aligned.apk"
apksigner verify "$OUT/fabric-office.apk"
echo "✓ $OUT/fabric-office.apk"
