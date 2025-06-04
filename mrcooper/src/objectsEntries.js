import React from "react";
import "./css/table.css";

const ObjectsEntries = () => {
  //Object.entries is used to create new array with key,value //["name":"SamNJ"]
  //syntax
  // Object.entries(object)

  //simple example
  // const object = {
  //    "Product A": {params1: "Value1", params2: "Value2" },
  //    "Product B": {params1: "Value3", params2: "Value4" }
  // }
  //console.log(Object.entries(object));

  //object.entries with map()
  //console.log(Object.entries(object).map(([product,params]) => {
  //  return {product,params}; //here I want to view both Product and params
  //}));
  //output  [{ Product A, param1: 'value1', param2: 'value2' }, { Product B, param1: 'value3', param2: 'value4' }]

  //Nested .map() for Inner Data
  //If parameters itself contains nested data, we apply another .map() inside:
  // const result = Object.entries(object).map(([product,params]) =>
  //     Object.entries(params).map(([paramsName, value]) => {
  //       console.log("Product is", product, "Params is", params,
  //       "ParamsName ", paramsName, "Value is", value);
  //     }));
  //output
  //Product is Product A Params is { param1: 'value1', param2: 'value2' } ParamsName  param1 Value is value1
  //Product is Product A Params is { param1: 'value1', param2: 'value2' } ParamsName  param2 Value is value2
  //Product is Product B Params is { param1: 'value3', param2: 'value4' } ParamsName  param1 Value is value3
  //Product is Product B Params is { param1: 'value3', param2: 'value4' } ParamsName  param2 Value is value4

  const object1 = {
    Section1: {
      headers: ["Value", "UoM", "- tol", "+ tol"],
      records: [
        {
          "Product A": {
            "Parameter 1": { Value: "X123" }, // Not a number
            "Parameter 2": { Value: "YZ 45" }, // Not a number
            "Parameter 3": { UoM: "unit", Value: "50" },
            "Parameter 4": { UoM: "kg", Value: "1.25" },
            "Parameter 5": { Value: "5-5-5-5" }, // Not a number
          },
        },
        {
          "Product B": {
            "Attribute 1": { Value: "ABCD" }, // Not a number
            "Attribute 2": { UoM: "kg", "- tol": "2", "+ tol": "2" },
            "Attribute 3": {
              UoM: "mm",
              Value: "150",
              "- tol": "2",
              "+ tol": "2",
            },
            "Attribute 4": { UoM: "mm", Value: "220" },
            "Attribute 5": { UoM: "mm", Value: "190" },
            "Attribute 6": { UoM: "mm", Value: "2.000" },
            "Attribute 7": { UoM: "mm", Value: "2000" },
            "Attribute 8": { Value: "0.95" },
            "Attribute 9": { UoM: "mm", Value: "2005" },
          },
        },
      ],
    },
  };

  console.log( Object.entries(object1.Section1.records).map(([key, value], index) => 
    Object.entries(value).map(([product, parameters],index)=>
      Object.entries(parameters).map(([param, paramValue],index) => {
        return paramValue;
      }) 
    )));
    const { headers, records } = object1.Section1;
  return (
    <div>
      <h1 className="font-bold text-blue-500">Object.entries(object)</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Product</th>
            <th>Parameter</th>
            {headers.map((header, idx) => (
              <th key={idx}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody> {/*we should use the map before object.entries([]).map bez object.entries gives 0 and 1 
        Key: 0 Product: Product A Parameter: Parameter 1 Value: { Value: 'X123' }
        but when we use map that time it will avoid it and give o/p as Product: Product A Parameter: Parameter 1 Value: { Value: 'X123' } */}
          {records.map((record, recordIndex) =>
            Object.entries(record).map(([product, parameters]) =>
              Object.entries(parameters).map(([parameter, values], index) => (
                <tr key={`${product}-${index}`}>
                  {index === 0 ? <td rowSpan={Object.keys(parameters).length}>{product}</td> : null}
                  <td>{parameter}</td>
                  {headers.map((header, idx) => (
                    <td key={idx}>{values[header] || "-"}</td>
                  ))}
                </tr>
              ))
            )
          )}
        </tbody>
        <caption>Products purchased last month</caption>
      </table>
    </div>
  );
};

export default ObjectsEntries;
