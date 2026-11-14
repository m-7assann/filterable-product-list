# تطبيق الأندرويد

تطبيق بسيط بيفتح نظام مكتب القماش المنشور على:
`https://fathyemad22-ops.github.io/fabric-office/fabric-office/`

أي تحديث للسيستم على GitHub بيوصل للتطبيق لوحده، ومش محتاج تنزّل APK جديد.
التطبيق بيوصّل: روابط واتساب، الطباعة، حفظ واسترجاع النسخة الاحتياطية، وزرار الرجوع.

## البناء (على Ubuntu)
```
apt-get install aapt android-sdk-platform-23 dalvik-exchange zipalign apksigner
KEYSTORE=/path/fabric-office-release.jks KS_PASS=... ./build.sh
```
الناتج: `build/fabric-office.apk`

⚠️ ملف التوقيع (`.jks`) مش موجود في الـ repo. أي نسخة جديدة من التطبيق لازم تتوقّع بنفس الملف،
وإلا لازم تمسح التطبيق القديم وتسطب الجديد (البيانات مش هتضيع لأنها أونلاين).
