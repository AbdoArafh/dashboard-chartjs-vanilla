"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var b = document.getElementById("bar");
var bCtx = b.getContext("2d");
var mainColor = "rgb(44,123,229)";
var dateFromTo = function (from, to, month) {
    var arr = [];
    for (var i = from; i <= to; i++) {
        arr = __spreadArray(__spreadArray([], arr, true), [month + i], false);
    }
    return arr;
};
var barList = [25, 20, 30, 22, 17, 10, 18, 26, 28, 26, 20, 32];
var barData = {
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
var bar = new Chart(bCtx, {
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
                    title: function (toolTipItem) { return toolTipItem[0].label; },
                    label: function (toolTipItem) { return " " + toolTipItem.formattedValue + "%"; },
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
                    callback: function (value) { return value + "%"; },
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
    }
});
