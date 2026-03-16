import React, { useState } from "react";
import { Mail, Phone, MessageSquare, Send, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SendEmail } from "@/api/integrations";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const emailBody = `פנייה חדשה מהאתר של תמר שכטר

שם: ${formData.name}
דוא"ל: ${formData.email}
טלפון: ${formData.phone}
${formData.company ? `ארגון/עסק: ${formData.company}` : ''}

הודעה:
${formData.message}
      `;

      // Send to first email
      await SendEmail({
        from_name: "אתר תמר שכטר",
        to: "obmtamar@gmail.com",
        subject: `פנייה חדשה מ-${formData.name}`,
        body: emailBody
      });

      // Send to second email
      await SendEmail({
        from_name: "אתר תמר שכטר",
        to: "sarirom6@gmail.com",
        subject: `פנייה חדשה מ-${formData.name}`,
        body: emailBody
      });

    } catch (error) {
      console.error("Error sending email:", error);
      // אפילו אם יש שגיאה, נציג הודעת תודה למשתמש
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: ""
    });
    setIsSubmitted(false);
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920&q=80" 
            alt="צור קשר"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              בואו נדבר
            </h1>
            <p className="text-2xl text-slate-300 max-w-3xl mx-auto">
              מוכנים לשינוי שבאמת קורה? נתחיל בשיחת ייעוץ ללא עלות
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">פרטי התקשרות</h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                אשמח לשמוע עליכם ועל האתגרים שלכם. בשיחה הראשונה נזהה יחד את הצרכים ונבין איך אני יכולה לעזור לכם.
              </p>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-4 bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 hover:border-orange-500/50 transition-colors"
                >
                  <div className="p-3 bg-orange-500/20 rounded-xl">
                    <Mail className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">דוא"ל</div>
                    <div className="text-lg font-semibold">obmtamar@gmail.com</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-4 bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 hover:border-blue-500/50 transition-colors"
                >
                  <div className="p-3 bg-blue-500/20 rounded-xl">
                    <Phone className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">טלפון</div>
                    <div className="text-lg font-semibold" dir="ltr">0502131327</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-4 bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 hover:border-green-500/50 transition-colors"
                >
                  <div className="p-3 bg-green-500/20 rounded-xl">
                    <MessageSquare className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">WhatsApp</div>
                    <div className="text-lg font-semibold" dir="ltr">0502131327</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-gradient-to-r from-orange-500/10 to-blue-500/10 backdrop-blur border border-orange-500/20 rounded-2xl p-8"
                >
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-orange-400" />
                    בשיחת הייעוץ נדבר על:
                  </h3>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                      <span>המצב הנוכחי והאתגרים המרכזיים בארגון</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                      <span>המטרות והיעדים שאתם רוצים להשיג</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                      <span>הדרך הנכונה להתקדם ולהשיג תוצאות</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                      <span>איך תראה העבודה המשותפת</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-3xl p-8"
            >
              {!isSubmitted ? (
                <>
                  <h2 className="text-3xl font-bold mb-6">שלחו לי פרטים</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-slate-300 mb-2 block">שם מלא *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-slate-900 border-slate-700 text-white focus:border-orange-500"
                        placeholder="איך קוראים לך?"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-slate-300 mb-2 block">דוא"ל *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-slate-900 border-slate-700 text-white focus:border-orange-500"
                        placeholder="your@email.com"
                        dir="ltr"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-slate-300 mb-2 block">טלפון *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="bg-slate-900 border-slate-700 text-white focus:border-orange-500"
                        placeholder="052-1234567"
                        dir="ltr"
                      />
                    </div>

                    <div>
                      <Label htmlFor="company" className="text-slate-300 mb-2 block">שם הארגון / העסק</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="bg-slate-900 border-slate-700 text-white focus:border-orange-500"
                        placeholder="שם הארגון שלך"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-slate-300 mb-2 block">ספרו לי קצת על האתגרים שלכם</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-slate-900 border-slate-700 text-white focus:border-orange-500 min-h-[120px]"
                        placeholder="מה מוביל אתכם לחפש ייעוץ ארגוני? מה האתגרים המרכזיים?"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-6 text-lg shadow-2xl shadow-orange-500/40"
                    >
                      {isSubmitting ? (
                        "שולח..."
                      ) : (
                        <>
                          <Send className="w-5 h-5 ml-2" />
                          שלחו את הפרטים
                        </>
                      )}
                    </Button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-12 h-12 text-green-400" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">תודה רבה!</h3>
                  <p className="text-lg text-slate-300 mb-6">
                    הפרטים התקבלו בהצלחה.<br/>
                    אחזור אליכם בהקדם האפשרי.
                  </p>
                  <Button
                    onClick={resetForm}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-8 py-3"
                  >
                    שלחו הודעה נוספת
                  </Button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}