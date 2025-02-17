'use client';
import { useEffect, useState } from "react"
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import Sidebar from "../../components/Sidebar";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
type data = {
  income: number[];
  expenses: number[];
};

export default function Dashboard() {
  const [financialData, setFinancialData] = useState<data>({ income: [], expenses: [] });

  useEffect(() => {
    // Fetch financial data from backend (mocked for now)
    const fetchFinancialData = async () => {
      // Simulating API call
      const data = {
        income: [500, 600, 700, 650, 800],
        expenses: [300, 400, 500, 450, 600],
      };
      setFinancialData(data);
    };

    fetchFinancialData();
  }, []);

  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Income",
        data: financialData.income,
        borderColor: "rgb(34, 197, 94)",
        backgroundColor: "rgba(34, 197, 94, 0.2)",
        fill: true,
      },
      {
        label: "Expenses",
        data: financialData.expenses,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
      },
    ],
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4 ml-60">
        <div className="w-full bg-white shadow-md p-4 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Financial Dashboard</h2>
          <div className="w-full h-[400px]">
            <Line data={chartData} />
          </div>
        </div>
        <div className="mt-8 w-full bg-white shadow-md p-4 rounded-lg">
          <h3 className="text-xl font-semibold">Transactions</h3>
          <ul className="space-y-4">
            <li className="flex justify-between items-center">
              <span className="font-medium">Groceries</span>
              <span className="text-red-500">- $200</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="font-medium">Salary</span>
              <span className="text-green-500">+ $1500</span>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  );
}
