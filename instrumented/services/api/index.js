function cov_13upnm3e3k() {
  var path = "H:\\Web\\Agenagn_FrontEnd-main\\Agenagn_FrontEnd\\src\\services\\api\\index.js";
  var hash = "c5dd39a49a51cd00fe7569e4494c5dc05280f1e3";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "H:\\Web\\Agenagn_FrontEnd-main\\Agenagn_FrontEnd\\src\\services\\api\\index.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 14
        },
        end: {
          line: 3,
          column: 37
        }
      },
      "1": {
        start: {
          line: 4,
          column: 20
        },
        end: {
          line: 4,
          column: 48
        }
      },
      "2": {
        start: {
          line: 6,
          column: 17
        },
        end: {
          line: 15,
          column: 1
        }
      },
      "3": {
        start: {
          line: 7,
          column: 24
        },
        end: {
          line: 7,
          column: 53
        }
      },
      "4": {
        start: {
          line: 8,
          column: 22
        },
        end: {
          line: 8,
          column: 45
        }
      },
      "5": {
        start: {
          line: 10,
          column: 4
        },
        end: {
          line: 14,
          column: 5
        }
      },
      "6": {
        start: {
          line: 11,
          column: 8
        },
        end: {
          line: 11,
          column: 30
        }
      },
      "7": {
        start: {
          line: 13,
          column: 8
        },
        end: {
          line: 13,
          column: 17
        }
      },
      "8": {
        start: {
          line: 16,
          column: 19
        },
        end: {
          line: 22,
          column: 2
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 6,
            column: 17
          },
          end: {
            line: 6,
            column: 18
          }
        },
        loc: {
          start: {
            line: 6,
            column: 23
          },
          end: {
            line: 15,
            column: 1
          }
        },
        line: 6
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 10,
            column: 4
          },
          end: {
            line: 14,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 10,
            column: 4
          },
          end: {
            line: 14,
            column: 5
          }
        }, {
          start: {
            line: 10,
            column: 4
          },
          end: {
            line: 14,
            column: 5
          }
        }],
        line: 10
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "c5dd39a49a51cd00fe7569e4494c5dc05280f1e3"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_13upnm3e3k = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_13upnm3e3k();
import axios from 'axios';
const local = (cov_13upnm3e3k().s[0]++, 'http://localhost:5000');
const localMobile = (cov_13upnm3e3k().s[1]++, 'http://192.168.1.101/:5000');
cov_13upnm3e3k().s[2]++;

const getToken = () => {
  cov_13upnm3e3k().f[0]++;
  const tokenString = (cov_13upnm3e3k().s[3]++, localStorage.getItem('token'));
  const userToken = (cov_13upnm3e3k().s[4]++, JSON.parse(tokenString));
  cov_13upnm3e3k().s[5]++;

  if (userToken) {
    cov_13upnm3e3k().b[0][0]++;
    cov_13upnm3e3k().s[6]++;
    return userToken.token;
  } else {
    cov_13upnm3e3k().b[0][1]++;
    cov_13upnm3e3k().s[7]++;
    return '';
  }
};

const backEndApi = (cov_13upnm3e3k().s[8]++, axios.create({
  baseURL: local,
  headers: {
    'x-access-token': getToken()
  }
}));
export default backEndApi;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImF4aW9zIiwibG9jYWwiLCJsb2NhbE1vYmlsZSIsImdldFRva2VuIiwidG9rZW5TdHJpbmciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidXNlclRva2VuIiwiSlNPTiIsInBhcnNlIiwidG9rZW4iLCJiYWNrRW5kQXBpIiwiY3JlYXRlIiwiYmFzZVVSTCIsImhlYWRlcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7OztBQWZaLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFFQSxNQUFNQyxLQUFLLDZCQUFHLHVCQUFILENBQVg7QUFDQSxNQUFNQyxXQUFXLDZCQUFHLDRCQUFILENBQWpCOzs7QUFFQSxNQUFNQyxRQUFRLEdBQUcsTUFBTTtBQUFBO0FBQ25CLFFBQU1DLFdBQVcsNkJBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixDQUFILENBQWpCO0FBQ0EsUUFBTUMsU0FBUyw2QkFBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdMLFdBQVgsQ0FBSCxDQUFmO0FBRm1COztBQUluQixNQUFJRyxTQUFKLEVBQWU7QUFBQTtBQUFBO0FBQ1gsV0FBT0EsU0FBUyxDQUFDRyxLQUFqQjtBQUNILEdBRkQsTUFFTztBQUFBO0FBQUE7QUFDSCxXQUFPLEVBQVA7QUFDSDtBQUNKLENBVEQ7O0FBVUEsTUFBTUMsVUFBVSw2QkFBR1gsS0FBSyxDQUFDWSxNQUFOLENBQWE7QUFDNUJDLEVBQUFBLE9BQU8sRUFBR1osS0FEa0I7QUFFNUJhLEVBQUFBLE9BQU8sRUFBRTtBQUVMLHNCQUFrQlgsUUFBUTtBQUZyQjtBQUZtQixDQUFiLENBQUgsQ0FBaEI7QUFRQSxlQUFlUSxVQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IGxvY2FsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMCc7XHJcbmNvbnN0IGxvY2FsTW9iaWxlID0gJ2h0dHA6Ly8xOTIuMTY4LjEuMTAxLzo1MDAwJztcclxuXHJcbmNvbnN0IGdldFRva2VuID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdG9rZW5TdHJpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICAgIGNvbnN0IHVzZXJUb2tlbiA9IEpTT04ucGFyc2UodG9rZW5TdHJpbmcpO1xyXG5cclxuICAgIGlmICh1c2VyVG9rZW4pIHtcclxuICAgICAgICByZXR1cm4gdXNlclRva2VuLnRva2VuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAnJ1xyXG4gICAgfVxyXG59O1xyXG5jb25zdCBiYWNrRW5kQXBpID0gYXhpb3MuY3JlYXRlKHtcclxuICAgIGJhc2VVUkwgOiBsb2NhbCxcclxuICAgIGhlYWRlcnM6IHtcclxuXHJcbiAgICAgICAgJ3gtYWNjZXNzLXRva2VuJzogZ2V0VG9rZW4oKVxyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJhY2tFbmRBcGk7XHJcbiJdfQ==