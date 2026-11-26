var arabic = false;
var englishPage = document.body.innerHTML;

function changeLanguage() {

    if (arabic == false) {

        var page = englishPage;


        <!--page1-->
        <!--ترجمه الصفحه الى العربيه-->

        page = page.split("Home").join("الرئيسية");
        page = page.split("Cases").join("القضايا");
        page = page.split("Case Details").join("تفاصيل القضايا");
        page = page.split("Contribute").join("شارك بمعلوماتك");
        page = page.split("MYSTERY BOX").join("صندوق الغموض");
        page = page.split("العربية").join("English");

        page = page.split("UNSOLVED CASES ARCHIVE").join("أرشيف القضايا الغامضة");
        page = page.split("THE TRUTH IS STILL OUT THERE.").join("الحقيقة ما زالت هناك.");
        page = page.split("Explore real unsolved cases").join("استكشف القضايا التي لم تُحل");
        page = page.split("discover evidence").join("واكتشف الأدلة");
        page = page.split("and help bring unanswered questions to light.").join("وساهم في كشف الحقائق الغامضة.");
        page = page.split("EXPLORE CASES").join("استكشف القضايا");
        page = page.split("CASE ARCHIVE").join("أرشيف القضايا");
        page = page.split("Created by Razan.").join("إعداد رزان.");


        <!-- page1 end-->

        <!--page2-->


        page = page.split("UNSOLVED CASES").join("القضايا التي لم تُحل");

        page = page.split("The Shoreline Case").join("قضية الشاطئ");
        page = page.split("The Forgotten Witness").join("الشاهدة المنسية");
        page = page.split("The Predicted Death").join("الموت المتوقع");

        page = page.split("A young woman was found dead near the beach").join("عُثر على شابة متوفاة بالقرب من الشاطئ");
        page = page.split("after a night gathering.").join("بعد تجمع ليلي.");
        page = page.split("Several people were questioned,").join("تم استجواب عدة أشخاص،");
        page = page.split("but their statements did not match.").join("لكن أقوالهم لم تكن متطابقة.");

        page = page.split("A young woman was found dead in the forest.").join("عُثر على شابة متوفاة في الغابة.");
        page = page.split("Her best friend was discovered holding the murder weapon.").join("وعُثر على صديقتها المقربة وهي تحمل سلاح الجريمة.");
        page = page.split("However, she had no memory of what happened.").join("لكنها لم تتذكر ما حدث.");

        page = page.split("A woman died in a mysterious hit-and-run accident.").join("توفيت امرأة في حادث دهس غامض.");
        page = page.split("Her spiritual advisor claimed to have predicted").join("وادعى مستشارها الروحي أنه تنبأ");
        page = page.split("her death before it happened.").join("بوفاتها قبل وقوعها.");
        page = page.split("Investigators began questioning his story.").join("وبدأ المحققون بالتشكيك في روايته.");

        page = page.split("View Case Details").join("عرض تفاصيل القضية");


        <!--page2 end-->


        <!--page3-->




        page = page.split("Case Overview").join("نظرة عامة على القضية");
        page = page.split("Evidence").join("الأدلة");

        page = page.split("A young woman was found dead near the beach.").join("عُثر على شابة متوفاة بالقرب من الشاطئ.");
        page = page.split("The investigation focused on her friends").join("ركز التحقيق على صديقاتها");
        page = page.split("and the events of that night.").join("والأحداث التي وقعت في تلك الليلة.");

        page = page.split("Witness statements").join("شهادات الشهود");
        page = page.split("Phone records").join("سجلات الهاتف");
        page = page.split("Evidence found at the beach").join("الأدلة التي عُثر عليها على الشاطئ");

        page = page.split("A young woman was found dead in the forest.").join("عُثر على شابة متوفاة في الغابة.");
        page = page.split("Her best friend was found holding the murder weapon,").join("عُثر على صديقتها المقربة وهي تحمل سلاح الجريمة،");
        page = page.split("but she could not remember what happened.").join("لكنها لم تستطع تذكر ما حدث.");

        page = page.split("The murder weapon").join("سلاح الجريمة");
        page = page.split("Evidence found in the forest").join("الأدلة التي عُثر عليها في الغابة");

        page = page.split("A woman died in a hit-and-run accident.").join("توفيت امرأة في حادث دهس.");
        page = page.split("Her spiritual advisor claimed that he had").join("وادعى مستشارها الروحي أنه");
        page = page.split("predicted her death before it happened.").join("تنبأ بوفاتها قبل وقوعها.");

        page = page.split("Accident scene investigation").join("التحقيق في موقع الحادث");
        page = page.split("Spiritual advisor's statements").join("أقوال المستشار الروحي");

        page = page.split("Case Information").join("معلومات القضايا");
        page = page.split("Case Name").join("اسم القضية");
        page = page.split("Location").join("الموقع");
        page = page.split("Status").join("الحالة");
        page = page.split("Beach").join("الشاطئ");
        page = page.split("Forest").join("الغابة");
        page = page.split("Road").join("الطريق");
        page = page.split("Unsolved").join("لم تُحل");
        page = page.split("Back to Cases").join("العودة إلى القضايا");

        <!--page3 end-->

        <!--page4>

        page = page.split("CONTRIBUTE INFORMATION").join("إرسال المعلومات");
        page = page.split("Share Your Information").join("شارك معلوماتك");
        page = page.split("Do you have any information about a case?").join("هل لديك أي معلومات عن إحدى القضايا؟");
        page = page.split("You can share it with us using the form below.").join("يمكنك مشاركتها معنا باستخدام النموذج أدناه.");

        page = page.split("Your Name:").join("اسمك:");
        page = page.split("Select a Case:").join("اختر القضية:");
        page = page.split("Your Information:").join("معلوماتك:");
        page = page.split("Submit").join("إرسال");
        page = page.split("The Shoreline Case").join("قضية الشاطئ");
        page = page.split("The Forgotten Witness").join("الشاهدة المنسية");
        page = page.split("The Predicted Death").join("الموت المتوقع");

        <!--page4 end-->

        document.body.innerHTML = page;
        document.body.dir = "rtl";
        document.title = "صندوق الغموض";

        arabic = true;

    } else {

        document.body.innerHTML = englishPage;
        document.body.dir = "ltr";
        document.title = "Mystery Box";

        arabic = false;
    }
}