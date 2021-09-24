function cov_zopryakd() {
  var path = "H:\\Web\\Agenagn_FrontEnd-main\\Agenagn_FrontEnd\\src\\components\\FooterStyles.js";
  var hash = "6aceb14888e48d5c6fca00bb5bd899b98be8645c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "H:\\Web\\Agenagn_FrontEnd-main\\Agenagn_FrontEnd\\src\\components\\FooterStyles.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 19
        },
        end: {
          line: 13,
          column: 1
        }
      },
      "1": {
        start: {
          line: 15,
          column: 25
        },
        end: {
          line: 22,
          column: 1
        }
      },
      "2": {
        start: {
          line: 24,
          column: 22
        },
        end: {
          line: 29,
          column: 1
        }
      },
      "3": {
        start: {
          line: 31,
          column: 19
        },
        end: {
          line: 41,
          column: 1
        }
      },
      "4": {
        start: {
          line: 43,
          column: 26
        },
        end: {
          line: 53,
          column: 1
        }
      },
      "5": {
        start: {
          line: 55,
          column: 23
        },
        end: {
          line: 60,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "6aceb14888e48d5c6fca00bb5bd899b98be8645c"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_zopryakd = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_zopryakd();
import styled from 'styled-components'; //#eeeeee

export const Box = (cov_zopryakd().s[0]++, styled.div`
  padding: 80px 60px;
  margin-top: 35%;
  background: #F5F5F5;   
  position: relative;
  bottom: 0;
  width: 100%;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`);
export const Container = (cov_zopryakd().s[1]++, styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`);
export const Column = (cov_zopryakd().s[2]++, styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`);
export const Row = (cov_zopryakd().s[3]++, styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`);
export const FooterLink = (cov_zopryakd().s[4]++, styled.a`
  color: #454545;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color: green;
      transition: 200ms ease-in;
  }
`);
export const Heading = (cov_zopryakd().s[5]++, styled.p`
  font-size: 24px;
  color: #454545;
  margin-bottom: 40px;
  font-weight: bold;
`);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZvb3RlclN0eWxlcy5qcyJdLCJuYW1lcyI6WyJzdHlsZWQiLCJCb3giLCJkaXYiLCJDb250YWluZXIiLCJDb2x1bW4iLCJSb3ciLCJGb290ZXJMaW5rIiwiYSIsIkhlYWRpbmciLCJwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixPQUFPQSxNQUFQLE1BQW1CLG1CQUFuQixDLENBQ0E7O0FBQ0EsT0FBTyxNQUFNQyxHQUFHLDJCQUFHRCxNQUFNLENBQUNFLEdBQUk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FWZ0IsQ0FBVDtBQVlQLE9BQU8sTUFBTUMsU0FBUywyQkFBR0gsTUFBTSxDQUFDRSxHQUFJO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBUHNCLENBQWY7QUFTUCxPQUFPLE1BQU1FLE1BQU0sMkJBQUdKLE1BQU0sQ0FBQ0UsR0FBSTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBTG1CLENBQVo7QUFPUCxPQUFPLE1BQU1HLEdBQUcsMkJBQUdMLE1BQU0sQ0FBQ0UsR0FBSTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVZnQixDQUFUO0FBWVAsT0FBTyxNQUFNSSxVQUFVLDJCQUFHTixNQUFNLENBQUNPLENBQUU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FWdUIsQ0FBaEI7QUFZUCxPQUFPLE1BQU1DLE9BQU8sMkJBQUdSLE1BQU0sQ0FBQ1MsQ0FBRTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBTG9CLENBQWIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuLy8jZWVlZWVlXHJcbmV4cG9ydCBjb25zdCBCb3ggPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDgwcHggNjBweDtcclxuICBtYXJnaW4tdG9wOiAzNSU7XHJcbiAgYmFja2dyb3VuZDogI0Y1RjVGNTsgICBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAgIHBhZGRpbmc6IDcwcHggMzBweDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgLyogYmFja2dyb3VuZDogcmVkOyAqL1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQ29sdW1uID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXJnaW4tbGVmdDogNjBweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBSb3cgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgIG1pbm1heCgxODVweCwgMWZyKSk7XHJcbiAgZ3JpZC1nYXA6IDIwcHg7XHJcbiAgIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbm1heCgyMDBweCwgMWZyKSk7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvb3RlckxpbmsgPSBzdHlsZWQuYWBcclxuICBjb2xvcjogIzQ1NDU0NTtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgIFxyXG4gICY6aG92ZXIge1xyXG4gICAgICBjb2xvcjogZ3JlZW47XHJcbiAgICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW47XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRpbmcgPSBzdHlsZWQucGBcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgY29sb3I6ICM0NTQ1NDU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuYDtcclxuIl19