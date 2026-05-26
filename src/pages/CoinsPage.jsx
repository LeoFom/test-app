import { Alert, Card } from "antd";

import { CoinsTable } from "../components/tables/CoinsTable";
import { useCoins } from "../hooks/useCoins";
import {PageHeader} from "../components/ui/PageHeader.jsx";
import {PageContainer} from "../components/ui/PageContainer.jsx";

export default function CoinsPage() {
  const {
    data = [],
    isLoading,
    isError,
  } = useCoins();

  if (isError) {
    return (
      <Alert
        type="error"
        message="Failed to load coins data"
        showIcon
      />
    );
  }

  return (
    <PageContainer>
      <PageHeader
        title={'Top Cryptocurrencies'}
        description={'Top 50 coins by market capitalization'}
      />

      <Card
        className="
          flex-1 overflow-hidden flex flex-col min-h-0 shadow-sm
        "
      >
        <CoinsTable
          data={data}
          loading={isLoading}
        />
      </Card>
    </PageContainer>
  );
}