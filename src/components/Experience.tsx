import Card from "@/components/ui/Card";
import { IconArrowUpRight } from "@/icons";

function Experience() {
  return (
    <section
      id="experience"
      className="mb-16 flex flex-col scroll-mt-16 mg:mb-24 lg:scroll-mt-24 lg:mb-28"
    >
      <h2 className="font-medium mb-6 lg:hidden tracking-wider">EXPERIENCE</h2>
      <Card
        title="Software Engineer"
        org="ReliSource"
        body="Build, maintain, and ship robust production codes for client applications. Improve system performance and security. Closely work along with cross functional teams to design and implement new systems. Worked with the UI team to engineer and improve major features."
        skills={[
          "Ruby on Rails",
          "Apex",
          "React",
          "AngularJS",
          "jQuery",
          "Postgres",
          "TypeScript",
          "Visualforce",
          "AWS",
          "Azure",
        ]}
        duration="2022 - PRESENT"
        url="https://www.relisource.com/"
      />

      {/* <Card
        title="Lead Engineer"
        org="Twitter X"
        promotions={["Senior Engineer", "Engineer"]}
        body="Build, maintain, and ship production codes for client applications. Improve system performance and security. Create new features and maintain existing ones. Write and update unit tests."
        skills={["Ruby on Rails", "Apex", "React", "AngularJS", "AWS"]}
        duration="2023 - PRESENT"
      /> */}

      <div className="lg:mt-6">
        <a
        href="./resume.pdf"
        className="group leading-tight font-semibold inline-block relative hover:text-blue-600 transition-colors"
        target="_blank"
        rel="noreferrer noopener"
      >
        <span className="group-hover:text-blue-600">View Full Résumé</span>
        <IconArrowUpRight className="size-4 -right-5 bottom-0 absolute group-hover:-right-6 group-hover:bottom-1 transition-[right,bottom] duration-200 leading-3 group-hover:text-blue-600" />
      </a>
      </div>
    </section>
  );
}

export default Experience;
