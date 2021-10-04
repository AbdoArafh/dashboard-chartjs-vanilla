const d = document.getElementById("doughnut")! as HTMLCanvasElement;
const dCtx = d.getContext("2d")!;

const firstColor = {
    r: 210,
    g: 221,
    b: 236,
  };
  
  const secondColor = {
    r: 44,
    g: 123,
    b: 229,
  };

  interface color {
      r: number, g: number, b: number
  }
  
  const colorsFromTo = (first: color, second: color, arr: number[]) => {
    let colors: string[] = [];
    const diff = {
      r: second.r - first.r,
      g: second.g - first.g,
      b: second.b - first.b,
    };
  
    const sortedArray = [...arr].sort((a, b) => a - b);
    const min = sortedArray[0];
    const max = sortedArray[sortedArray.length - 1];
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];
      let precent = (item - min) / (max - min);
      let r = precent * diff.r + first.r;
      let g = precent * diff.g + first.g;
      let b = precent * diff.b + first.b;
      colors = [...colors, `rgb(${r}, ${g}, ${b})`];
    }
    return colors;
  };
  
  const list = [60, 25, 15];
  const data = {
    labels: ["Direct", "Organic", "Refferal"],
    datasets: [
      {
        label: "Doughnut Data",
        data: list,
        backgroundColor: [...colorsFromTo(firstColor, secondColor, list)],
        borderWidth: 1,
      },
    ],
  };
  

// @ts-ignore
const doughnut = new Chart(dCtx, {
    type: "doughnut",    
    data,
    options: {
    cutout: "90%",
    responsive: true,
    maintainAspectRatio: true,
    hoverOffset: 13,
    offset: 8,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        usePointStyle: true,
        labels: {
          usePointStyle: true,
        },
      },
      tooltip: {
        backgroundColor: "white",
        bodyColor: "black",
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
          label: (toolTipItem: any) => " " + toolTipItem.parsed,
        },
      },
      title: {
        display: true,
        text: "Average Data per month",
        fontSize: 20,
      },
    },
    },
  })