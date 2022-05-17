const request = require("request-promise");

const builder = require("./builder");

const template = (website, apiKey, dashboardOrder) => ({
  "Connections": [
    {
      "host": "https://plausible.io/api/v1/stats",
      "dbName": null,
      "port": null,
      "username": null,
      "password": null,
      "options": [{
        "User-Agent": `chartbrew-${website}`
      }],
      "connectionString": null,
      "authentication": {
        "type": "bearer_token",
        "token": apiKey,
      },
      "firebaseServiceAccount": null,
      "name": "Plausible API",
      "type": "api",
      "active": true,
      "srv": false
    }
  ],
  "Charts": [
    {
      "name": "Visits stats",
      "type": "line",
      "subType": "lcTimeseries",
      "public": false,
      "shareable": false,
      "chartSize": 1,
      "dashboardOrder": dashboardOrder + 1,
      "displayLegend": false,
      "pointRadius": null,
      "startDate": null,
      "endDate": null,
      "includeZeros": true,
      "currentEndDate": false,
      "timeInterval": "day",
      "autoUpdate": null,
      "draft": false,
      "mode": "kpi",
      "maxValue": null,
      "minValue": null,
      "disabledExport": null,
      "Datasets": [
        {
          "fillColor": "rgba(0,0,0,0)",
          "patterns": [],
          "conditions": null,
          "fieldsSchema": {
            "root[].results": "object",
            "root[].results.pageviews": "object",
            "root[].results.pageviews.value": "number"
          },
          "excludedFields": null,
          "groups": null,
          "query": null,
          "xAxis": "root[].results",
          "xAxisOperation": null,
          "yAxis": "root[].results.visitors.value",
          "yAxisOperation": "none",
          "dateField": null,
          "datasetColor": "#1F77B4",
          "fill": false,
          "multiFill": false,
          "dateFormat": null,
          "legend": "Visitors",
          "pointRadius": null,
          "formula": null,
          "groupBy": null,
          "DataRequest": {
            "headers": {},
            "body": "null",
            "conditions": null,
            "configuration": null,
            "method": "GET",
            "route": `aggregate?site_id=${website}&metrics=visitors`,
            "useGlobalHeaders": true,
            "query": null,
            "pagination": false,
            "items": "items",
            "itemsLimit": 100,
            "offset": "offset",
            "paginationField": null,
            "template": null
          },
        },
        {
          "fillColor": "rgba(0,0,0,0)",
          "patterns": [],
          "conditions": null,
          "fieldsSchema": {
            "root[].results": "object",
            "root[].results.pageviews": "object",
            "root[].results.pageviews.value": "number"
          },
          "excludedFields": null,
          "groups": null,
          "query": null,
          "xAxis": "root[].results",
          "xAxisOperation": null,
          "yAxis": "root[].results.pageviews.value",
          "yAxisOperation": "none",
          "dateField": null,
          "datasetColor": "#9467BD",
          "fill": false,
          "multiFill": false,
          "dateFormat": null,
          "legend": "Pageviews",
          "pointRadius": null,
          "formula": null,
          "groupBy": null,
          "DataRequest": {
            "headers": {},
            "body": "null",
            "conditions": null,
            "configuration": null,
            "method": "GET",
            "route": `aggregate?site_id=${website}&metrics=pageviews`,
            "useGlobalHeaders": true,
            "query": null,
            "pagination": false,
            "items": "items",
            "itemsLimit": 100,
            "offset": "offset",
            "paginationField": null,
            "template": null
          },
        }
      ],
      "tid": 1
    },
    {
      "name": "Visitors chart",
      "type": "line",
      "subType": "lcTimeseries",
      "public": false,
      "shareable": false,
      "chartSize": 2,
      "dashboardOrder": dashboardOrder + 2,
      "displayLegend": false,
      "pointRadius": null,
      "startDate": null,
      "endDate": null,
      "includeZeros": true,
      "currentEndDate": false,
      "timeInterval": "day",
      "autoUpdate": null,
      "draft": false,
      "mode": "chart",
      "maxValue": null,
      "minValue": null,
      "disabledExport": null,
      "Datasets": [
        {
          "fillColor": "rgba(0,0,0,0)",
          "patterns": [],
          "conditions": null,
          "fieldsSchema": {
            "root.results[].date": "date",
            "root.results[].visitors": "number"
          },
          "excludedFields": null,
          "groups": null,
          "query": null,
          "xAxis": "root.results[].date",
          "xAxisOperation": null,
          "yAxis": "root.results[].visitors",
          "yAxisOperation": "none",
          "dateField": "root.results[].date",
          "datasetColor": "rgba(101, 116, 205, 1)",
          "fill": false,
          "multiFill": false,
          "dateFormat": null,
          "legend": "Visitors",
          "pointRadius": null,
          "formula": null,
          "groupBy": null,
          "DataRequest": {
            "headers": {},
            "body": "null",
            "conditions": null,
            "configuration": null,
            "method": "GET",
            "route": `timeseries?site_id=${website}`,
            "useGlobalHeaders": true,
            "query": null,
            "pagination": false,
            "items": "items",
            "itemsLimit": 100,
            "offset": "offset",
            "paginationField": null,
            "template": null
          },
        }
      ],
      "tid": 0
    },
    {
      "name": "Visit length",
      "type": "line",
      "subType": "AddTimeseries",
      "public": false,
      "shareable": false,
      "chartSize": 1,
      "dashboardOrder": dashboardOrder + 3,
      "displayLegend": false,
      "pointRadius": null,
      "startDate": null,
      "endDate": null,
      "includeZeros": true,
      "currentEndDate": false,
      "timeInterval": "day",
      "autoUpdate": null,
      "draft": false,
      "mode": "kpi",
      "maxValue": null,
      "minValue": null,
      "disabledExport": null,
      "Datasets": [
        {
          "fillColor": "rgba(0,0,0,0)",
          "patterns": [],
          "conditions": null,
          "fieldsSchema": {
            "root[].results": "object",
            "root[].results.visit_duration": "object",
            "root[].results.visit_duration.value": "number"
          },
          "excludedFields": null,
          "groups": null,
          "query": null,
          "xAxis": "root[].results.visit_duration.value",
          "xAxisOperation": null,
          "yAxis": "root[].results.visit_duration.value",
          "yAxisOperation": "none",
          "dateField": null,
          "datasetColor": "#FF7F0E",
          "fill": false,
          "multiFill": false,
          "dateFormat": null,
          "legend": "Duration",
          "pointRadius": null,
          "formula": "{val}s",
          "groupBy": null,
          "DataRequest": {
            "headers": {},
            "body": "null",
            "conditions": null,
            "configuration": null,
            "method": "GET",
            "route": `aggregate?site_id=${website}&metrics=visit_duration`,
            "useGlobalHeaders": true,
            "query": null,
            "pagination": false,
            "items": "items",
            "itemsLimit": 100,
            "offset": "offset",
            "paginationField": null,
            "template": null
          },
        },
        {
          "fillColor": "rgba(0,0,0,0)",
          "patterns": [],
          "conditions": null,
          "fieldsSchema": {
            "root[].results": "object",
            "root[].results.bounce_rate": "object",
            "root[].results.bounce_rate.value": "number"
          },
          "excludedFields": null,
          "groups": null,
          "query": null,
          "xAxis": "root[].results.bounce_rate.value",
          "xAxisOperation": null,
          "yAxis": "root[].results.bounce_rate.value",
          "yAxisOperation": "none",
          "dateField": null,
          "datasetColor": "#17BECF",
          "fill": false,
          "multiFill": false,
          "dateFormat": null,
          "legend": "Bounce rate",
          "pointRadius": null,
          "formula": "{val}%",
          "groupBy": null,
          "DataRequest": {
            "headers": {},
            "body": "null",
            "conditions": null,
            "configuration": null,
            "method": "GET",
            "route": `aggregate?site_id=${website}&metrics=bounce_rate`,
            "useGlobalHeaders": true,
            "query": null,
            "pagination": false,
            "items": "items",
            "itemsLimit": 100,
            "offset": "offset",
            "paginationField": null,
            "template": null
          },
        }
      ],
      "tid": 2
    },
    {
      "name": "Top sources",
      "type": "table",
      "subType": "timeseries",
      "public": false,
      "shareable": false,
      "chartSize": 3,
      "dashboardOrder": dashboardOrder + 4,
      "displayLegend": false,
      "pointRadius": null,
      "startDate": null,
      "endDate": null,
      "includeZeros": true,
      "currentEndDate": false,
      "timeInterval": "day",
      "autoUpdate": null,
      "draft": false,
      "mode": "chart",
      "maxValue": null,
      "minValue": null,
      "disabledExport": null,
      "Datasets": [
        {
          "fillColor": "rgba(0,0,0,0)",
          "patterns": [],
          "conditions": null,
          "fieldsSchema": {
            "root.results[].pageviews": "number",
            "root.results[].utm_medium": "string",
            "root.results[].visitors": "number"
          },
          "excludedFields": [],
          "groups": null,
          "query": null,
          "xAxis": "root.results[]",
          "xAxisOperation": null,
          "yAxis": "root.results[].visitors",
          "yAxisOperation": "count",
          "dateField": null,
          "datasetColor": "#7F7F7F",
          "fill": false,
          "multiFill": false,
          "dateFormat": null,
          "legend": "Sources",
          "pointRadius": null,
          "formula": null,
          "groupBy": null,
          "DataRequest": {
            "headers": {},
            "body": "null",
            "conditions": null,
            "configuration": null,
            "method": "GET",
            "route": `breakdown?site_id=${website}&property=visit:source&metrics=visitors,pageviews`,
            "useGlobalHeaders": true,
            "query": null,
            "pagination": false,
            "items": "items",
            "itemsLimit": 100,
            "offset": "offset",
            "paginationField": null,
            "template": null
          },
        },
        {
          "fillColor": "rgba(0,0,0,0)",
          "patterns": [],
          "conditions": null,
          "fieldsSchema": {
            "root.results[].pageviews": "number",
            "root.results[].utm_source": "string",
            "root.results[].visitors": "number"
          },
          "excludedFields": null,
          "groups": null,
          "query": null,
          "xAxis": "root.results[].referrer",
          "xAxisOperation": null,
          "yAxis": "root.results[].visitors",
          "yAxisOperation": "count",
          "dateField": null,
          "datasetColor": "#CFECF9",
          "fill": false,
          "multiFill": false,
          "dateFormat": null,
          "legend": "UTM Sources",
          "pointRadius": null,
          "formula": null,
          "groupBy": null,
          "DataRequest": {
            "headers": {},
            "body": "null",
            "conditions": null,
            "configuration": null,
            "method": "GET",
            "route": `breakdown?site_id=${website}&property=visit:utm_source&metrics=pageviews,visitors`,
            "useGlobalHeaders": true,
            "query": null,
            "pagination": false,
            "items": "items",
            "itemsLimit": 100,
            "offset": "offset",
            "paginationField": null,
            "template": null
          },
        },
        {
          "fillColor": "rgba(0,0,0,0)",
          "patterns": [],
          "conditions": null,
          "fieldsSchema": {
            "root.results[].pageviews": "number",
            "root.results[].utm_medium": "string",
            "root.results[].visitors": "number"
          },
          "excludedFields": null,
          "groups": null,
          "query": null,
          "xAxis": "root.results[].utm_medium",
          "xAxisOperation": null,
          "yAxis": "root.results[].pageviews",
          "yAxisOperation": "count",
          "dateField": null,
          "datasetColor": "#2CA02C",
          "fill": false,
          "multiFill": false,
          "dateFormat": null,
          "legend": "UTM Mediums",
          "pointRadius": null,
          "formula": null,
          "groupBy": null,
          "DataRequest": {
            "headers": {},
            "body": "null",
            "conditions": null,
            "configuration": null,
            "method": "GET",
            "route": `breakdown?site_id=${website}&property=visit:utm_medium&metrics=visitors,pageviews`,
            "useGlobalHeaders": true,
            "query": null,
            "pagination": false,
            "items": "items",
            "itemsLimit": 100,
            "offset": "offset",
            "paginationField": null,
            "template": null
          },
        },
        {
          "fillColor": "rgba(0,0,0,0)",
          "patterns": [],
          "conditions": null,
          "fieldsSchema": {
            "root.results[].pageviews": "number",
            "root.results[].utm_medium": "string",
            "root.results[].visitors": "number"
          },
          "excludedFields": null,
          "groups": null,
          "query": null,
          "xAxis": "root.results[].utm_medium",
          "xAxisOperation": null,
          "yAxis": "root.results[].pageviews",
          "yAxisOperation": "count",
          "dateField": null,
          "datasetColor": "#2CA02C",
          "fill": false,
          "multiFill": false,
          "dateFormat": null,
          "legend": "UTM Campaigns",
          "pointRadius": null,
          "formula": null,
          "groupBy": null,
          "DataRequest": {
            "headers": {},
            "body": "null",
            "conditions": null,
            "configuration": null,
            "method": "GET",
            "route": `breakdown?site_id=${website}&property=visit:utm_medium&metrics=visitors,pageviews`,
            "useGlobalHeaders": true,
            "query": null,
            "pagination": false,
            "items": "items",
            "itemsLimit": 100,
            "offset": "offset",
            "paginationField": null,
            "template": null
          },
        }
      ],
      "tid": 3
    },
    {
      "name": "Devices",
      "type": "doughnut",
      "subType": "timeseries",
      "public": false,
      "shareable": false,
      "chartSize": 1,
      "dashboardOrder": dashboardOrder + 5,
      "displayLegend": true,
      "pointRadius": null,
      "startDate": null,
      "endDate": null,
      "includeZeros": true,
      "currentEndDate": false,
      "timeInterval": "day",
      "autoUpdate": null,
      "draft": false,
      "mode": "chart",
      "maxValue": null,
      "minValue": null,
      "disabledExport": null,
      "Datasets": [
        {
          "fillColor": [
            "rgba(80, 227, 194, 0.88)",
            "rgba(65, 117, 5, 0.45)",
            "rgba(244, 228, 27, 0.6)",
            "rgba(208, 2, 27, 0.4)"
          ],
          "patterns": [],
          "conditions": null,
          "fieldsSchema": {
            "root.results[].device": "string",
            "root.results[].visitors": "number"
          },
          "excludedFields": null,
          "groups": null,
          "query": null,
          "xAxis": "root.results[].device",
          "xAxisOperation": null,
          "yAxis": "root.results[].visitors",
          "yAxisOperation": "none",
          "dateField": null,
          "datasetColor": "rgba(252, 252, 252, 1)",
          "fill": false,
          "multiFill": true,
          "dateFormat": null,
          "legend": "Devices",
          "pointRadius": null,
          "formula": null,
          "groupBy": null,
          "DataRequest": {
            "headers": {},
            "body": "null",
            "conditions": null,
            "configuration": null,
            "method": "GET",
            "route": `breakdown?site_id=${website}&property=visit:device`,
            "useGlobalHeaders": true,
            "query": null,
            "pagination": false,
            "items": "items",
            "itemsLimit": 100,
            "offset": "offset",
            "paginationField": null,
            "template": null
          },
        }
      ],
      "tid": 5
    },
    {
      "name": "Top pages",
      "type": "table",
      "subType": "timeseries",
      "public": false,
      "shareable": false,
      "chartSize": 2,
      "dashboardOrder": dashboardOrder + 6,
      "displayLegend": false,
      "pointRadius": null,
      "startDate": null,
      "endDate": null,
      "includeZeros": true,
      "currentEndDate": false,
      "timeInterval": "day",
      "autoUpdate": null,
      "draft": false,
      "mode": "chart",
      "maxValue": null,
      "minValue": null,
      "disabledExport": null,
      "Datasets": [
        {
          "fillColor": "rgba(0,0,0,0)",
          "patterns": [],
          "conditions": null,
          "fieldsSchema": {
            "root.results[].page": "string",
            "root.results[].pageviews": "number",
            "root.results[].visitors": "number"
          },
          "excludedFields": null,
          "groups": null,
          "query": null,
          "xAxis": "root.results[].page",
          "xAxisOperation": null,
          "yAxis": "root.results[].visitors",
          "yAxisOperation": "count",
          "dateField": null,
          "datasetColor": "#1F77B4",
          "fill": false,
          "multiFill": false,
          "dateFormat": null,
          "legend": "Pages",
          "pointRadius": null,
          "formula": null,
          "groupBy": null,
          "DataRequest": {
            "headers": {},
            "body": "null",
            "conditions": null,
            "configuration": null,
            "method": "GET",
            "route": `breakdown?site_id=${website}&property=event:page&metrics=visitors,pageviews`,
            "useGlobalHeaders": true,
            "query": null,
            "pagination": false,
            "items": "items",
            "itemsLimit": 100,
            "offset": "offset",
            "paginationField": null,
            "template": null
          },
        },
        {
          "fillColor": "rgba(0,0,0,0)",
          "patterns": [],
          "conditions": null,
          "fieldsSchema": {
            "root.results[].entry_page": "string",
            "root.results[].pageviews": "number",
            "root.results[].visitors": "number"
          },
          "excludedFields": null,
          "groups": null,
          "query": null,
          "xAxis": "root.results[].entry_page",
          "xAxisOperation": null,
          "yAxis": "root.results[].visitors",
          "yAxisOperation": "count",
          "dateField": null,
          "datasetColor": "#FF7F0E",
          "fill": false,
          "multiFill": false,
          "dateFormat": null,
          "legend": "Entry pages",
          "pointRadius": null,
          "formula": null,
          "groupBy": null,
          "DataRequest": {
            "headers": {},
            "body": "null",
            "conditions": null,
            "configuration": null,
            "method": "GET",
            "route": `breakdown?site_id=${website}&property=visit:entry_page&metrics=visitors,pageviews`,
            "useGlobalHeaders": true,
            "query": null,
            "pagination": false,
            "items": "items",
            "itemsLimit": 100,
            "offset": "offset",
            "paginationField": null,
            "template": null
          },
        },
        {
          "fillColor": "rgba(0,0,0,0)",
          "patterns": [],
          "conditions": null,
          "fieldsSchema": {
            "root.results[].exit_page": "string",
            "root.results[].pageviews": "number",
            "root.results[].visitors": "number"
          },
          "excludedFields": null,
          "groups": null,
          "query": null,
          "xAxis": "root.results[].exit_page",
          "xAxisOperation": null,
          "yAxis": "root.results[].visitors",
          "yAxisOperation": "count",
          "dateField": null,
          "datasetColor": "#9467BD",
          "fill": false,
          "multiFill": false,
          "dateFormat": null,
          "legend": "Exit pages",
          "pointRadius": null,
          "formula": null,
          "groupBy": null,
          "DataRequest": {
            "headers": {},
            "body": "null",
            "conditions": null,
            "configuration": null,
            "method": "GET",
            "route": `breakdown?site_id=${website}&property=visit:exit_page&metrics=visitors,pageviews`,
            "useGlobalHeaders": true,
            "query": null,
            "pagination": false,
            "items": "items",
            "itemsLimit": 100,
            "offset": "offset",
            "paginationField": null,
            "template": null
          },
        }
      ],
      "tid": 4
    },
    {
      "name": "Countries & Browsers",
      "type": "table",
      "subType": "timeseries",
      "public": false,
      "shareable": false,
      "chartSize": 2,
      "dashboardOrder": dashboardOrder + 7,
      "displayLegend": false,
      "pointRadius": null,
      "startDate": null,
      "endDate": null,
      "includeZeros": true,
      "currentEndDate": false,
      "timeInterval": "day",
      "autoUpdate": null,
      "draft": false,
      "mode": "chart",
      "maxValue": null,
      "minValue": null,
      "disabledExport": null,
      "Datasets": [
        {
          "fillColor": "rgba(0,0,0,0)",
          "patterns": [],
          "conditions": null,
          "fieldsSchema": {
            "root.results[].country": "string",
            "root.results[].pageviews": "number",
            "root.results[].visitors": "number"
          },
          "excludedFields": null,
          "groups": null,
          "query": null,
          "xAxis": "root.results[].country",
          "xAxisOperation": null,
          "yAxis": "root.results[].visitors",
          "yAxisOperation": "count",
          "dateField": null,
          "datasetColor": "#1F77B4",
          "fill": false,
          "multiFill": false,
          "dateFormat": null,
          "legend": "Countries",
          "pointRadius": null,
          "formula": null,
          "groupBy": null,
          "DataRequest": {
            "headers": {},
            "body": "null",
            "conditions": null,
            "configuration": null,
            "method": "GET",
            "route": `breakdown?site_id=${website}&property=visit:country&metrics=pageviews,visitors`,
            "useGlobalHeaders": true,
            "query": null,
            "pagination": false,
            "items": "items",
            "itemsLimit": 100,
            "offset": "offset",
            "paginationField": null,
            "template": null
          },
        },
        {
          "fillColor": "rgba(0,0,0,0)",
          "patterns": [],
          "conditions": null,
          "fieldsSchema": {
            "root.results[].browser": "string",
            "root.results[].pageviews": "number",
            "root.results[].visitors": "number"
          },
          "excludedFields": null,
          "groups": null,
          "query": null,
          "xAxis": "root.results[].browser",
          "xAxisOperation": null,
          "yAxis": "root.results[].visitors",
          "yAxisOperation": "count",
          "dateField": null,
          "datasetColor": "#7F7F7F",
          "fill": false,
          "multiFill": false,
          "dateFormat": null,
          "legend": "Browsers",
          "pointRadius": null,
          "formula": null,
          "groupBy": null,
          "DataRequest": {
            "headers": {},
            "body": "null",
            "conditions": null,
            "configuration": null,
            "method": "GET",
            "route": `breakdown?site_id=${website}&property=visit:browser&metrics=visitors,pageviews`,
            "useGlobalHeaders": true,
            "query": null,
            "pagination": false,
            "items": "items",
            "itemsLimit": 100,
            "offset": "offset",
            "paginationField": null,
            "template": null
          },
        }
      ],
      "tid": 6
    }
  ],
});

module.exports.template = template;

module.exports.build = async (projectId, {
  website, apiKey, charts, connection_id
}, dashboardOrder) => {
  if ((!website || !apiKey) && !connection_id) return Promise.reject("Missing required 'website' or 'apiKey' argument");

  let checkErrored = false;
  const checkWebsiteOpt = {
    url: `https://plausible.io/api/v1/stats/aggregate?site_id=${website}&period=6mo&metrics=visitors,pageviews,bounce_rate,visit_duration`,
    method: "GET",
    headers: {
      accept: "application/json",
      authorization: `Bearer ${apiKey}`,
    },
    json: true,
  };

  try {
    await request(checkWebsiteOpt);
  } catch (e) {
    checkErrored = e;
  }

  if (checkErrored) {
    return Promise.reject(new Error(checkErrored));
  }

  return builder(projectId, website, apiKey, dashboardOrder, template, charts, connection_id)
    .catch((err) => {
      if (err && err.message) {
        return Promise.reject(err.message);
      }
      return Promise.reject(err);
    });
};
