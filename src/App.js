import React, { Component } from 'react';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          type: "ul", title: "1", classNameSpan: "caret", classNameUl: "nested", Icons: "mdi-checkbox-blank-circle",
          subMenu:
            [
              { type: "li", title: "11", classNameSpan: "caret", classNameUl: "nested", Icons: "mdi mdi-chart-pie" },
              { type: "li", title: "12", classNameSpan: "caret", classNameUl: "nested", Icons: "mdi mdi-chart-pie" },
              {
                type: "li", title: "13", classNameSpan: "caret", classNameUl: "nested", Icons: "mdi mdi-chart-pie",
                subMenu:
                  [
                    { type: "li", title: "130", classNameSpan: "caret", classNameUl: "nested", Icons: "mdi mdi-checkbox-blank-circle-outline" },
                    { type: "li", title: "131", classNameSpan: "caret", classNameUl: "nested", Icons: "mdi mdi-checkbox-blank-circle-outline" },
                    { type: "li", title: "132", classNameSpan: "caret", classNameUl: "nested", Icons: "mdi mdi-checkbox-blank-circle-outline" },
                    { type: "li", title: "133", classNameSpan: "caret", classNameUl: "nested", Icons: "mdi mdi-checkbox-blank-circle-outline" }
                  ]
              },
              { type: "li", title: "14", classNameSpan: "caret", classNameUl: "nested", Icons: "mdi mdi-chart-pie" },
              {
                type: "li", title: "15", classNameSpan: "caret", classNameUl: "nested", Icons: "mdi mdi-chart-pie",
                subMenu:
                  [
                    { type: "li", title: "150", classNameSpan: "caret 1", classNameUl: "nested", Icons: "mdi mdi-checkbox-blank-circle-outline" },
                    { type: "li", title: "151", classNameSpan: "caret 1", classNameUl: "nested", Icons: "mdi mdi-checkbox-blank-circle-outline" },
                    { type: "li", title: "152", classNameSpan: "caret 1", classNameUl: "nested", Icons: "mdi mdi-checkbox-blank-circle-outline" },
                    { type: "li", title: "153", classNameSpan: "caret 1", classNameUl: "nested", Icons: "mdi mdi-checkbox-blank-circle-outline" }
                  ]
              },
              { type: "li", title: "16", classNameSpan: "caret", classNameUl: "nested", Icons: "mdi mdi-chart-pie" },
              { type: "li", title: "17", classNameSpan: "caret", classNameUl: "nested", Icons: "mdi mdi-chart-pie" }
            ]
        },
        {
          type: "ul", title: "2", classNameSpan: "caret", classNameUl: "nested", Icons: "mdi-checkbox-blank-circle",
          subMenu:
            [
              { type: "li", title: "20", classNameSpan: "caret", classNameUl: "nested", Icons: "mdi mdi-checkbox-blank-circle-outline" },
              { type: "li", title: "21", classNameSpan: "caret", classNameUl: "nested", Icons: "mdi mdi-checkbox-blank-circle-outline" },
              { type: "li", title: "22", classNameSpan: "caret", classNameUl: "nested", Icons: "mdi mdi-checkbox-blank-circle-outline" },
              { type: "li", title: "23", classNameSpan: "caret", classNameUl: "nested", Icons: "mdi mdi-checkbox-blank-circle-outline" }
            ]
        },
        {
          type: "ul", title: "3", classNameSpan: "caret", classNameUl: "nested", Icons: "mdi-checkbox-blank-circle",
          subMenu:
            [
              { type: "li", title: "30", classNameSpan: "caret", classNameUl: "nested", Icons: "mdi mdi-checkbox-blank-circle-outline" },
              { type: "li", title: "31", classNameSpan: "caret", classNameUl: "nested", Icons: "mdi mdi-checkbox-blank-circle-outline" },
              { type: "li", title: "32", classNameSpan: "caret", classNameUl: "nested", Icons: "mdi mdi-checkbox-blank-circle-outline" },
              {
                type: "li", title: "33 ", classNameSpan: "caret", classNameUl: "nested", Icons: "mdi mdi-checkbox-blank-circle-outline",
                subMenu:
                  [
                    {
                      type: "li", title: " 1ژیر شاخه اخر", classNameSpan: "caret", classNameUl: "nested", Icons: "mdi mdi-checkbox-marked-circle-outline",
                      subMenu:
                        [
                          { type: "li", title: " 2ژیر شاخه اخر", classNameSpan: "caret", classNameUl: "nested", Icons: "mdi mdi-checkbox-marked-circle-outline" },
                          { type: "li", title: " 2ژیر شاخه اخر", classNameSpan: "caret", classNameUl: "nested", Icons: "mdi mdi-checkbox-marked-circle-outline" },
                          { type: "li", title: " 2ژیر شاخه اخر", classNameSpan: "caret", classNameUl: "nested", Icons: "mdi mdi-checkbox-marked-circle-outline" },
                        ]
                    },
                    { type: "li", title: " 2ژیر شاخه اخر", classNameSpan: "caret", classNameUl: "nested", Icons: "mdi mdi-checkbox-marked-circle-outline" },
                    { type: "li", title: " 3ژیر شاخه اخر", classNameSpan: "caret", classNameUl: "nested", Icons: "mdi mdi-checkbox-marked-circle-outline" },

                  ]
              }
            ]
        },
      ]
    }
  }
  rendersSubmenu = (data) => {
    debugger
    return (<ul className={data.classNameUl}>
      {data.subMenu.map(n => {
        return (
          <li className={n.subMenu ? n.classNameSpan : ""}><span className={n.Icons ? n.Icons : ""} />{n.title}{n.subMenu ? (this.rendersSubmenu(n)) : null}</li>
        )
      })}
    </ul>
    )
  }
  rendersTreeView = () => {
    const { items } = this.state
    return (
      items.map((o, i) => {
        return (
          <li><span className={o.classNameSpan ? o.classNameSpan : ""}><span className={o.Icons} />{o.title}</span>
            {o.subMenu ? this.rendersSubmenu(o) : null}</li>
        )
      })

    )
  }

  //     return (
  //       <ul >
  //         <li><span className={o.classNameSpan}><span className={o.subicons} />{o.title}</span>
  //           {o.subMenu ? (<ul className={o.classNameUl}>
  //             {o.subMenu.map(n => {
  //               return <li className={n.subMenu ? o.classNameSpan : null}><span className={n.subicons} />{n.title}{n.subMenu ? (
  //                 <ul className={o.classNameUl}>{n.subMenu.map(x => {
  //                   return <li><span className={x.subicons} />{x.title}</li>
  //                 })}</ul>) : null}  </li>
  //             })}
  //           </ul>) : null}</li>
  //       </ul>
  //     )
  // }
  componentDidMount() {
    var toggler = document.getElementsByClassName("caret");
    var i;

    for (i = 0; i < toggler.length; i++) {
      toggler[i].addEventListener("click", function () {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("caret-down");
      });
    }
  }

  render() {
    const { items } = this.state

    return (
      <div>
        <ul id="myUL">
          {this.rendersTreeView()}
        </ul>
      </div>
    )

  }
}

export default App;






{/* <li><span class="caret">Beverages</span>
            <ul class="nested">
              <li><span className="mdi-human-baby-changing-table" />Water</li>
              <li>Coffee</li>
              <li><span class="caret">Tea</span>
                <ul class="nested">
                  <li>Black Tea</li>
                  <li>White Tea</li>
                  <li><span class="caret">Green Tea</span>
                    <ul class="nested">
                      <li>Sencha</li>
                      <li>Gyokuro</li>
                      <li>Matcha</li>
                      <li>Pi Lo Chun</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li> */}
