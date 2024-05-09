import Card from "@/components/ui/Card";
import Link from "@/components/ui/Link";

function Experience() {
  return (
    <section
      id="experience"
      className="mb-16 flex flex-col scroll-mt-16 mg:mb-24 lg:scroll-mt-24 lg:mb-28"
    >
      <h2 className="font-medium mb-5 lg:hidden tracking-wider">EXPERIENCE</h2>
      <Card
        title="Software Engineer"
        org="ReliSource"
        body="Build, maintain, and ship production codes for client applications. Improve system performance and security. Closely work with cross functional teams to design and implement new systems. Worked with the UI team to engineer and improve major features."
        skills={[
          "Ruby on Rails",
          "Apex",
          "React",
          "AngularJS",
          "jQuery",
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

      <div className="mt-8">
        <Link title="View Full Résumé" url="./resume.pdf" />
      </div>
    </section>
  );
}

export default Experience;
