import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Home from "../Components/Home";
import Welcome from "../Components/Welcome";
import About from "../Components/About";
import Projects from "../Components/Projects";
import Service from "../Components/Service";

const ArabicPage = () => {
  return (
    <>
      <Header
        home="الرئيسيه"
        contact="تواصل معنا"
        work="اعمالنا"
        service="خدماتنا"
        about="المزيد"
      />
      <Home
        t1="الخبراء يحولون فكرتك إلى منتج"
        t2="الاستفادة من التقنيات المتطورة"
        t3="نقوم بتطوير حلول برمجية مصممة خصيصًا لمنصات الويب والهواتف المحمولة."
        b="استكشاف المزيد"
      />
      <Welcome
        t1="مرحباً!"
        t2="شريكك الأول لحلول تطوير البرمجيات"
        t3={["من اجل", "الويب", " و", " تطبيق الجوال ", " تطوير"]}
        p={`مرحبا في عالمنا! نحن تطبيق متخصص على الويب والجوال
           شركة تطوير وتطوير البرمجيات تقدم مصممة خصيصا
           حلول. بدءًا من تصميم تطبيقات الويب والهواتف المحمولة الاستثنائية للشركات الناشئة،
           الشركات، نحن هنا لتحويل الأفكار المبتكرة إلى واقع ملموس. مع
           فرق الخبراء لدينا تقود هذه المهمة، ونحن نقدم خلفية شاملة
           وتطوير الواجهة الأمامية`}
        b="تعرف علينا أكثر"
      />
      <Projects
        secTitle="مشاريعنا"
        p1="يقدم الموقع الإلكتروني حلاً شاملاً لأصحاب القوارب للحفاظ على سفنهم في أفضل حالة. من خلال التنقل سهل الاستخدام والتصميم البديهي، يوفر موقع الويب معلومات حول خدمات غسيل القوارب، بما في ذلك الباقات"
        p2="يوفر موقع الويب منصة للعملاء للتعرف عليها
                 الخدمات المتاحة مع واجهة سهلة الاستخدام وسريعة الاستجابة
                 التصميم، يهدف الموقع إلى تبسيط عملية غسيل السيارات"
        p3="يقدم الموقع خدمات شاملة لتنظيف الطائرات وتفصيلها لضمان أعلى معايير النظافة لشركات الطيران ومشغلي الطائرات الخاصة. من خلال واجهة سهلة الاستخدام، يوفر الموقع معلومات مفصلة حول مجموعة الخدمات المقدمة"
        message="استكشاف المزيد"
      />
      <Service
        secTitle="خدماتنا"
        p1={`يركز على خلق بديهية، وجذابة بصريا، وسلس
               التفاعلات بين المستخدمين والمنتجات أو الخدمات الرقمية.`}
        p2="إنشاء تطبيقات برمجية لمنصات مختلفة مثل الأجهزة المحمولة أو أجهزة الكمبيوتر المكتبية أو متصفحات الويب."
        p3="تتضمن عملية إنشاء وتطوير منتجات مادية أو رقمية تلبي احتياجات ورغبات المستخدمين وتتوافق أيضًا مع أهداف العمل."
        p4="عملية منهجية تضمن تلبية المنتجات أو الخدمات للمتطلبات والمعايير المحددة."
      />
      <About
        secTitle="معلومات عنا"
        t1="رؤيتنا"
        p1={`بناء النجاح على المدى الطويل لكل من عملائنا! ونحن نسعى جاهدين ل
                 تزويد عملائنا بالأكثر فعالية من حيث التكلفة والعملية
                 حلول لمساعدتهم على تنمية تواجدهم على الإنترنت وخارجه
                 بينما تتجاوز أهداف أعمالهم. من خلال الحلول الذكية أ
                 فريق موهوب، خدمة ودية، تسليم سريع، ومستمر
                 يدعم.`}
        t2="مهمتنا"
        p2={`فهم متطلبات عملك وأهدافه و
                 تمكننا من خلق أفضل الحلول لتحقيق عملك
                 هدف! نحن نأخذ وقتًا للتعرف على كل عميل حتى نتمكن من تقديم الخدمة
                 الحل الأنسب لهم. نحن نطور الموارد باستخدام
                 التكنولوجيا المتطورة التي توفر أقصى عائد على
                 الاستثمارات لتحقيق النمو على المدى الطويل لكل منهم.`}
      />
      <Footer
        secTitle="اتصل بنا"
        title1="Get In Touch"
        title2="Message Us"
        description="Always keep in touch with us through e-mail or WhatsApp and we
                will respond to you as soon as possible."
        building="Name of Business"
        buildingDesc="TIBA SWISS GMBH"
        location="Location"
        locationDesc="Poststrasse 17 2504 Biel/Bienne , Switzerland"
        placeholder1="Name"
        placeholder2="Subject"
        placeholder3="Message"
        submit="Send Message"
      />
    </>
  );
};

export default ArabicPage;