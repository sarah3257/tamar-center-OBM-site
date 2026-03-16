import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { CheckCircle, Award, Users, TrendingUp, Target, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1920&q=80" 
            alt="תמר שכטר"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              כשהבנתי שהשינוי הארגוני<br/>
              <span className="text-orange-400">צריך להתחיל מהאנשים</span><br/>
              הכל השתנה
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-3xl p-8 md:p-12 mb-12"
          >
            <p className="text-2xl md:text-3xl text-slate-200 leading-relaxed mb-6">
              היי, אני <span className="text-orange-400 font-bold">תמר שכטר</span>, יועצת התנהגות ארגונית (OBM).
            </p>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              במשך <span className="text-blue-400 font-semibold">10 שנים</span> אני עוסקת בניתוח התנהגות - תחילה בטיפול אישי, 
              ואחר כך גיליתי את הכוח האמיתי שלו בעולם הארגוני. 
            </p>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              ראיתי מקרוב איך ארגונים מתקשים לעשות שינויים, איך מנהלים נלחמים בתהליכים שלא עובדים, 
              ואיך עובדים מצוינים מתנתקים כי "ככה זה פה".
            </p>
            <p className="text-xl text-white font-semibold leading-relaxed">
              והבנתי משהו פשוט:<br/>
              <span className="text-orange-400">כשמתחילים מהאנשים, ולא מהתיאוריה – הארגון מתנהג אחרת.</span>
            </p>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold mb-8 text-center">הניסיון שלי</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: <Award className="w-8 h-8" />, text: "10 שנות ניסיון בניתוח התנהגות", color: "orange" },
                { icon: <CheckCircle className="w-8 h-8" />, text: "הכשרה מקצועית בניתוח התנהגות וטיפול CBT", color: "blue" },
                { icon: <Users className="w-8 h-8" />, text: "ניסיון בתפקידי ניהול מגוונים - אני מכירה את המציאות מבפנים", color: "orange" },
                { icon: <TrendingUp className="w-8 h-8" />, text: "ליווי עמותות גדולות של מאות עובדים", color: "blue" },
                { icon: <Target className="w-8 h-8" />, text: "ליווי עסקים בצמיחה ובגיוס עובדים", color: "orange" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-start gap-4 bg-gradient-to-br ${
                    item.color === 'orange'
                      ? 'from-orange-500/10 to-orange-600/5 border-orange-500/20'
                      : 'from-blue-500/10 to-blue-600/5 border-blue-500/20'
                  } backdrop-blur border rounded-2xl p-6`}
                >
                  <div className={item.color === 'orange' ? 'text-orange-400' : 'text-blue-400'}>
                    {item.icon}
                  </div>
                  <p className="text-slate-200 text-lg">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-12 bg-gradient-to-r from-orange-500/10 to-blue-500/10 backdrop-blur border border-orange-500/20 rounded-2xl p-8"
            >
              <p className="text-lg text-slate-300 leading-relaxed mb-4">
                עבדתי עם ארגונים שהיו במשבר, עם כאלה שרצו להתייעל, ועם עסקים שצמחו מהר מדי ורצו לעשות את זה נכון.
              </p>
              <p className="text-xl text-white font-semibold">
                התוצאות מדברות: הגדלת רווחיות של כ-30%, חסכון של כ-20% בשעות עבודה, 
                ומה שהכי חשוב - <span className="text-orange-400">ארגונים שבהם האנשים רוצים להיות.</span>
              </p>
            </motion.div>
          </motion.div>

          {/* What Makes Me Different */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold mb-8 text-center">מה מייחד את הגישה שלי?</h2>
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-3xl p-8 md:p-12">
              <p className="text-xl text-slate-200 leading-relaxed mb-6">
                רוב היועצים הארגוניים בונים תוכנית ומצפים שהאנשים יתאימו את עצמם אליה.
              </p>
              <p className="text-2xl text-orange-400 font-bold mb-6">
                אני עושה הפוך.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                אני לא מגיעה "להרצות" על שינוי, אלא בונה אותו צעד אחרי צעד, 
                באופן שמרגיש טבעי לעובדים ומנהלים כאחד.
              </p>

              <div className="bg-slate-900/50 rounded-2xl p-6 mb-8">
                <h3 className="text-2xl font-bold text-blue-400 mb-4">אני מתחילה מהאנשים:</h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  מי הם, איך הם עובדים, מה מניע אותם, מה מעכב אותם.<br/>
                  ורק אז בונה שינוי שמתאים להם - לא להיפך.
                </p>
              </div>

              <p className="text-xl text-white font-semibold mb-6">זה נשמע פשוט, אבל זה משנה הכל:</p>

              <div className="space-y-4">
                {[
                  { num: "1", title: "אבחון מדויק", desc: "זיהוי הגורמים שמקדמים או מעכבים ביצועים" },
                  { num: "2", title: "תכנון ישים", desc: 'בניית מותאמת אישית, לא "תוכנית מגירה"' },
                  { num: "3", title: "יישום ומדידה", desc: "שינוי שמתרחש בפועל ומניב תוצאות ברות קיימא" },
                  { num: "4", title: "התוצאות נשארות", desc: "כי השינוי מעצים את החוזקות הקיימות בארגון" }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 bg-slate-900/50 rounded-xl p-6"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      {step.num}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                      <p className="text-slate-300">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold mb-8 text-center">הערכים שמובילים אותי</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <Award className="w-10 h-10" />, title: "מקצועיות", desc: "מבוסס על עקרונות מדעיים וכלים מוכחים" },
                { icon: <Heart className="w-10 h-10" />, title: "מנטלית", desc: "כלים מעולמות הטיפול הרגשי וההתנהגותי" },
                { icon: <Users className="w-10 h-10" />, title: "אנושיות", desc: "תקשורת פתוחה עם כל אדם בארגון, בכל דרג" },
                { icon: <Target className="w-10 h-10" />, title: "דיוק", desc: "אבחון ממוקד שמוביל לתוצאות ולא רק למילים 'יפות'" }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-orange-500/10 to-blue-500/10 backdrop-blur border border-slate-700 rounded-2xl p-8 text-center hover:scale-105 transition-transform"
                >
                  <div className="text-orange-400 mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-slate-300">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-orange-500/20 to-blue-500/20 backdrop-blur border border-orange-500/30 rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold mb-6">בואו נדבר</h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              אם אתם מרגישים שהארגון שלכם תקוע, שהשינויים לא קורים, או שאתם בצמיחה ורוצים לעשות אותה נכון - אני כאן.
            </p>
            <p className="text-lg text-slate-400 mb-8">
              שיחת ייעוץ ללא עלות - נבחן יחד את התהליכים בארגון שלכם<br/>
              ונזהה בדיוק מה מעכב אתכם באמת מלהתקדם – ומה יאפשר לשינוי לקרות.
            </p>
            <Link
              to={createPageUrl("Contact")}
              className="inline-block px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl shadow-orange-500/40 text-xl"
            >
              לשיחת ייעוץ חינם ←
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}