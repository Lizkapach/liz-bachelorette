export interface Bridesmaid {
  key: string;
  name: string;
  isBride: boolean;
  dedication: string;
  image: string;
}

export interface ScheduleItem {
  time: string;
  title: string;
  desc: string;
}

export interface ShoppingItem {
  id: number;
  description: string;
  category: string;
  claimed_by: string | null;
}

export const BRIDESMAIDS: Bridesmaid[] = [
  { key: 'liz', name: 'Liz', isBride: true, dedication: '', image: '/images/oil/LIZ.png' },
  {
    key: 'yahavit',
    name: 'Yahavit',
    isBride: false,
    dedication: 'יכולת מיוחדת: ג׳ינגול אקסטרים בין הילדות, עסק פרטי והחיים\n\nמדד התרגשות: בשיא (כל עוד השמלה במחיר שפוי)',
    image: '/images/oil/YAHAVIT.png',
  },
  {
    key: 'stavit',
    name: 'Stavit',
    isBride: false,
    dedication: 'יכולת מיוחדת: לתפקד בבוקר בלי לישון דקה בלילה\n\nמדד התרגשות: מנהלת הסושיאל והסטורי הצמודה של ליז',
    image: '/images/oil/STAVIT.png',
  },
  {
    key: 'gali',
    name: 'Gali',
    isBride: false,
    dedication: 'יכולת מיוחדת: לתקתק מילואים כאילו היא עדיין בסדיר\n\nמדד התרגשות: הקרבה לאומית - לקחה יום חופש מצה״ל',
    image: '/images/oil/GALI.png',
  },
  {
    key: 'nooniz',
    name: 'Nooniz',
    isBride: false,
    dedication: 'יכולת מיוחדת: לסיים הכל בטיל כדי להיות מול הטלויזיה ב-21:00\n\nמדד התרגשות: בינלאומית - השמלה הוטסה במיוחד מתאילנד',
    image: '/images/oil/NOONIZ.png',
  },
];

export const SCHEDULE_THURSDAY: ScheduleItem[] = [
  { time: '15:00', title: 'הגעה לעינות ספיר', desc: 'מגיעות ומתארגנות!' },
  { time: '15:30', title: 'בריכה וג\'קוזי', desc: 'יין, נשנושים, והתחלה מפנקת' },
  { time: '18:00', title: 'עיסוי לכלה', desc: 'פינוק מיוחד לליז' },
  { time: '19:00', title: 'מתלבשות', desc: 'מתארגנות בלוק לבן' },
  { time: '20:00', title: 'ארוחת ערב', desc: 'סושי, מסיבה ויין' },
  { time: '21:00', title: 'משחקים ומתנות', desc: 'להגיע שיכורות' },
];

export const SCHEDULE_FRIDAY: ScheduleItem[] = [
  { time: '8:00', title: 'יוגה ליד הבריכה', desc: 'להביא מזרן!' },
  { time: '9:00', title: 'מתלבשות', desc: 'לוק לבן' },
  { time: '10:00', title: 'קפה וארוחת בוקר', desc: 'קפה הרים' },
  { time: '12:00', title: 'סיבוב בירושלים', desc: 'מוזמנות להשפיע בסקר למטה' },
];

export const DEFAULT_SHOPPING_ITEMS: ShoppingItem[] = [
  { id: 1, description: 'גומי', category: 'food', claimed_by: null },
  { id: 2, description: 'חטיפים', category: 'food', claimed_by: null },
  { id: 3, description: 'קרקרים', category: 'food', claimed_by: null },
  { id: 4, description: 'גבינות קשות/שמנת', category: 'food', claimed_by: null },
  { id: 5, description: 'שוקולדים', category: 'food', claimed_by: null },
  { id: 6, description: 'יין', category: 'drinks', claimed_by: null },
  { id: 7, description: 'פרוסקו/שמפניה', category: 'drinks', claimed_by: null },
  { id: 8, description: 'מזרני יוגה (למי שאין)', category: 'gear', claimed_by: null },
  { id: 9, description: 'רמקול למוזיקה', category: 'gear', claimed_by: null },
  { id: 10, description: 'מצלמת פולרואיד', category: 'gear', claimed_by: null },
];

export const EVENT_DATE = new Date('2026-05-14T15:00:00+03:00');
