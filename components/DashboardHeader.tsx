"use client";

import OverviewCard from "@/components/OverviewCard";

interface DashboardHeaderProps {
  scrap: () => Promise<void>;
}

export default function DashboardHeader(props: DashboardHeaderProps) {
  return (
    <>
      <div className="columns is-justify-content-space-between">
        <div className="column">
          <h1 className="title">Tableau de bord</h1>
        </div>

        <div className="column is-2">
          <button
            className="button is-primary is-fullwidth"
            onClick={async () => await props.scrap()}
          >
            Scrapp
          </button>
        </div>
      </div>
      <div className="columns">
        <OverviewCard title="Total de posts" content="45" />
        <OverviewCard title="Postes à pourvoir" content="22" />
        <OverviewCard title="Moyenne des rémunérations" content="40k € / an" />
      </div>
    </>
  );
}
