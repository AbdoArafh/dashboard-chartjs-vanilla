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
var d = document.getElementById("doughnut");
var dCtx = d.getContext("2d");
var firstColor = {
    r: 210,
    g: 221,
    b: 236,
};
var secondColor = {
    r: 44,
    g: 123,
    b: 229,
};
var colorsFromTo = function (first, second, arr) {
    var colors = [];
    var diff = {
        r: second.r - first.r,
        g: second.g - first.g,
        b: second.b - first.b,
    };
    var sortedArray = __spreadArray([], arr, true).sort(function (a, b) { return a - b; });
    var min = sortedArray[0];
    var max = sortedArray[sortedArray.length - 1];
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        var precent = (item - min) / (max - min);
        var r = precent * diff.r + first.r;
        var g = precent * diff.g + first.g;
        var b_1 = precent * diff.b + first.b;
        colors = __spreadArray(__spreadArray([], colors, true), ["rgb(" + r + ", " + g + ", " + b_1 + ")"], false);
    }
    return colors;
};
var list = [60, 25, 15];
var data = {
    labels: ["Direct", "Organic", "Refferal"],
    datasets: [
        {
            label: "Doughnut Data",
            data: list,
            backgroundColor: __spreadArray([], colorsFromTo(firstColor, secondColor, list), true),
            borderWidth: 1,
        },
    ],
};
// @ts-ignore
var doughnut = new Chart(dCtx, {
    type: "doughnut",
    data: data,
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
                    title: function (toolTipItem) { return toolTipItem[0].label; },
                    label: function (toolTipItem) { return " " + toolTipItem.parsed; },
                },
            },
            title: {
                display: true,
                text: "Average Data per month",
                fontSize: 20,
            },
        },
    },
});
