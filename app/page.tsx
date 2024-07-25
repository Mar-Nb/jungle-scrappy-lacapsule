import puppeteer from "puppeteer";
import DashboardHeader from "@/components/DashboardHeader";
import RecentJobs from "@/components/RecentJobs";
import ToBeFilledJobs from "@/components/ToBeFilledJobs";

export default function Home() {
  async function scrap() {
    "use server";

    const url =
      "https://www.welcometothejungle.com/fr/jobs?query=d%C3%A9veloppeur&sortBy=mostRecent";

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(url);
    const title = await page.title();
    console.log(title);

    await browser.close();
  }

  return (
    <main className="container grey-border">
      <section className="section">
        <DashboardHeader scrap={scrap} />
      </section>

      <section className="section">
        <div className="columns">
          <div className="column is-two-thirds">
            <ToBeFilledJobs />
          </div>

          <div className="column">
            <RecentJobs />
          </div>
        </div>
      </section>
    </main>
  );
}
