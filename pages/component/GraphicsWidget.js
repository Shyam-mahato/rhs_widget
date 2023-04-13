import { useState, useEffect, useContext } from "react";

const ElectionGraphicsComponent = () => {
  try {
    return (
      <>
        <h1>Graphic Page</h1>

        <style jsx>{`
          .elec-glblhd-highlight {
            display: flex;
            margin-bottom: 10px;
            font-size: 18px;
            color: #e1261c;
            font-weight: 500;
          }
          .elec-glblhd-highlight a {
            display: flex;
            color: #e1261c;
            text-transform: uppercase;
            align-items: center;
            font-size: 13px;
            font-weight: 500;
          }
          .elec-glblhd-highlight a span {
            margin-left: 5px;
            color: #001d42;
            position: relative;
          }
          .elec-glblhd-highlight a span:after {
            content: "";
            position: absolute;
            width: 100%;
            height: 3px;
            background: #e1261c;
            bottom: -3px;
            left: 0;
          }
          .election_graphics {
            width: 100%;
            background: #f6f6f6 0% 0% no-repeat padding-box;
            border: 1px solid #b6b4b4;
            margin-bottom: 20px;
          }
          <<<<<<< HEAD .election_graphics a {
            display: block;
          }
          .election_graphics figure {
            height: auto;
            overflow: hidden;
          }
          ======= .election_graphics a {
            display: block;
          }
          .election_graphics figure {
            height: 213px;
            overflow: hidden;
          }
          .election_graphics img {
            width: 100%;
            display: block;
            height: 100%;
          }
          >>>>>>>consolecleanup .election_graphics img {
            width: 100%;
            display: block;
            height: auto;
          }
          .election_graphics figcaption {
            padding: 10px;
          }
          .election_graphics span {
            color: #949494;
            font-size: 12px;
            padding-bottom: 5px;
            display: block;
          }
          .election_graphics_title {
            color: #282828;
            font-size: 15px;
          }
          .election_graphics {
            border-top: 0;
          }

          .elec-glblhd-highlight {
            margin-bottom: 0;
          }

          .elec-glblhd-highlight.under_border {
            justify-content: space-between;
            padding: 10px;
            border: 1px solid #b6b4b4;
            margin: 0;
            align-items: end;
            display: flex;
          }

          .add_rhs {
            text-align: center;
            margin-top: 8px;
          }

          .add_rhs span {
            color: #656565;
            text-transform: uppercase;
            font-size: 10px;
            text-align: center;
            display: block;
            font-weight: normal;
            line-height: 10px;
            padding-bottom: 2px;
          }

          .add_rhs_row {
            width: 98px;
            height: 42px;
            background: #282828 0% 0% no-repeat padding-box;
          }

          .stel-hglgt {
            border-top: 0;
          }

          .stel-hglgt-slider {
            margin-top: 0;
            padding-top: 10px;
          }

          .elec-glblhd-highlights.under_border {
            -webkit-box-pack: justify;
            justify-content: space-between;
            padding: 5px 10px;
            border: 1px solid rgb(182, 180, 180);
            margin: 0px;
            -webkit-box-align: end;
            align-items: center;
          }

          .elec-glblhd a h2 {
            display: inline-block;
            color: #e1261c;
            text-transform: uppercase;
            font-size: 18px;
          }
          .add_rhs {
            text-align: center;
          }
        `}</style>
      </>
    );
  } catch (e) {
    // console.log("ElectionGraphicsComponent error ", e);
    return null;
  }
};
export default ElectionGraphicsComponent;
