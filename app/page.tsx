import OverviewCard from "@/components/OverviewCard";
import RecentJobs from "@/components/RecentJobs";
import ToBeFilledJobs from "@/components/ToBeFilledJobs";

export default function Home() {
  return (
    <main className="container grey-border">

      <section className="section">
        <div className="columns is-justify-content-space-between">
          <div className="column">
        <h1 className="title">Tableau de bord</h1>
          </div>

          <div className="column is-2">
          <button className="button is-primary">Scrapp</button>
          </div>
        </div>
        <div className="columns">
          <OverviewCard title="Total de posts" content="45" />
          <OverviewCard title="Postes à pourvoir" content="22" />
          <OverviewCard title="Moyenne des rémunérations" content="40k € / an" />
       </div>
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
