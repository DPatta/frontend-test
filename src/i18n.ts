import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "moveShape": "Move Shape",
          "movePosition": "Move Position",
          "shufflePosition": "Shuffle Position",
          "Test1": "Test 1",
          "Test2": "Test 2",
          "titleTest1" : "Layout & Styles",
          "titleTest2" : "Form & Tabel"

        }
      },
      th: {
        translation: {
          "moveShape": "เลื่อนรูปแบบ",
          "movePosition": "เปลี่ยนตำแหน่ง",
          "shufflePosition": "สลับตำแหน่ง",
          "Test1": "แบบทดสอบที่ 1",
          "Test2": "แบบทดสอบที่ 2",
          "titleTest1" : "การจัดการหน้าเว็บ",
          "titleTest2" : "การจัดการหน้าฟอร์ม"





        }
      }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;