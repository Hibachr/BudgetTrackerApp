'use client';

import { useEffect, useState } from 'react';

const Chart = ({ option1, option2 }) => {
  const [chartLoaded, setChartLoaded] = useState(false);

  const [chartWidth, setChartWidth] = useState(1450);
  const [chartHeight, setChartHeight] = useState(400);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setChartWidth(window.innerWidth * 0.9);
      setChartHeight(window.innerWidth < 768 ? 300 : 400);
      
      const handleResize = () => {
        setChartWidth(window.innerWidth * 0.9);
        setChartHeight(window.innerWidth < 768 ? 300 : 400);
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && !chartLoaded) {
      const loadGoogleCharts = () => {
        google.charts.load('current', { packages: ['corechart'] });
        google.charts.setOnLoadCallback(() => {
          setChartLoaded(true);
        });
      };

      if (!window.google?.charts) {
        const script = document.createElement('script');
        script.src = 'https://www.gstatic.com/charts/loader.js';
        script.async = true;
        script.onload = loadGoogleCharts;
        document.body.appendChild(script);
      } else {
        loadGoogleCharts();
      }
    }
  }, [chartLoaded]);

  useEffect(() => {
    if (chartLoaded && typeof window !== 'undefined' && window.google) {
      drawChart();
    }
  }, [option1, option2, chartLoaded, chartWidth, chartHeight]);

  const drawChart = () => {
    if (!window.google) return;

    let data;

    // Define graphs for different dropdown combinations
    if (option1 === 'Income Chart' && option2 === 'This Year') {
      data = google.visualization.arrayToDataTable([
        ['Year', 'Sales'],
        ['Jan', 2000],
        ['Feb', 2500],
        ['Mar', 3000],
        ['Apr', 3500],
        ['May', 2000],
        ['Jun', 2500],
        ['Jul', 3000],
        ['Aug', 3500],
        ['Sep', 2000],
        ['Oct', 2500],
        ['Nov', 3000],
        ['Dec', 3500],
      ]);
    } else if (option1 === 'Income Chart' && option2 === 'This Month') {
      data = google.visualization.arrayToDataTable([
        ['Week', 'Sales'],
        ['Week 1', 500],
        ['Week 2', 700],
        ['Week 3', 600],
        ['Week 4', 800],
      ]);
    } else if (option1 === 'Income Chart' && option2 === 'This Day') {
      data = google.visualization.arrayToDataTable([
        ['Hour', 'Sales'],
        ['9 AM', 100],
        ['12 PM', 150],
        ['3 PM', 200],
        ['6 PM', 250],
      ]);
    } else if (option1 === 'Outcome Chart' && option2 === 'This Year') {
      data = google.visualization.arrayToDataTable([
        ['Year', 'Expenses'],
        ['Jan', 2000],
        ['Feb', 2500],
        ['Mar', 3000],
        ['Apr', 3500],
        ['May', 2000],
        ['Jun', 2500],
        ['Jul', 3000],
        ['Aug', 3500],
        ['Sep', 2000],
        ['Oct', 2500],
        ['Nov', 3000],
        ['Dec', 3500],
      ]);
    } else if (option1 === 'Outcome Chart' && option2 === 'This Month') {
      data = google.visualization.arrayToDataTable([
        ['Week', 'Expenses'],
        ['Week 1', 400],
        ['Week 2', 500],
        ['Week 3', 600],
        ['Week 4', 550],
      ]);
    } else {
      data = google.visualization.arrayToDataTable([
        ['Hour', 'Expenses'],
        ['9 AM', 80],
        ['12 PM', 120],
        ['3 PM', 140],
        ['6 PM', 170],
      ]);
    }

    const options = {
      curveType: 'none',
      legend: 'none',
      title: '',
      colors: ['blue'],
      lineWidth: 3,
      width: chartWidth,
      height: chartHeight,
      chartArea: { width: '80%', height: '70%' },
    };

    const chart = new google.visualization.LineChart(
      document.getElementById('curve_chart')
    );

    chart.draw(data, options);
  };

  return (
    <div className='md:left-[16%]'
      id="curve_chart"
      style={{
        
        position: 'absolute',
        zIndex: '-1',
        top: 210,
        chartArea: {
            left: 0,    // Remove left padding
            top: 0,     // Remove top padding
            right: 0,   // Remove right padding
            bottom: 0,  // Remove bottom padding
            width: '100%',  // Maximize width
            height: '100%'  // Maximize height
          }
      }}
    ></div>
  );
};

export default Chart;
