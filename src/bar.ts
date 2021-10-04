const b = document.getElementById("bar")! as HTMLCanvasElement;
const bCtx = b.getContext("2d")!;

const mainColor = "rgb(44,123,229)";

const dateFromTo = (from: number, to: number, month: string) => {
  let arr: string[] = [];
  for (let i = from; i <= to; i++) {
    arr = [...arr, month + i];
  }
  return arr;
};

const barList = [25, 20, 30, 22, 17, 10, 18, 26, 28, 26, 20, 32];
const barData = {
  labels: dateFromTo(1, 12, "Oct "),
  datasets: [
    {
      label: "Bar Data",
      data: barList,
      backgroundColor: mainColor,
    },
  ],
};

// @ts-ignore
const bar = new Chart(bCtx, {
    type: "bar",
    data: barData,
    options: {
    responsive: true,
    maintainAspectRatio: true,
    borderRadius: Number.MAX_VALUE,
    borderSkipped: false,
    barThickness: 10,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        titleAlign: "center",
        titleFont: {
          size: 14,
          weight: "normal",
        },
        backgroundColor: "white",
        bodyColor: "#95aac9",
        usePointStyle: true,
        borderColor: "#cfd3d8",
        borderWidth: 1,
        yAlign: "bottom",
        xAlign: "center",
        titleColor: "black",
        animations: false,
        padding: 12,
        callbacks: {
          title: (toolTipItem: any) => toolTipItem[0].label,
          label: (toolTipItem: any) => " " + toolTipItem.formattedValue + "%",
        },
      },
      title: {
        display: true,
        text: "Conversations",
        fontSize: 20,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value: string | number) => value + "%",
          color: "#95aac9",
        },
        grid: {
          borderDash: [3, 3],
          drawBorder: false,
          drawTicks: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#95aac9",
          maxRotation: 0,
          font: {
            size: 10,
          },
        },
      },
    },
}})
