import React, { Component } from 'react';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          type: "ul", title: "ردیف 1", classNameSpan: "caret", classNameUl: "nested", subicons: "mdi-checkbox-blank-circle",
          subMenu:
            [
              { type: "li", title: "زیر شاخه 1", subicons: "mdi mdi-chart-pie" },
              { type: "li", title: "زیر شاخه 2", subicons: "mdi mdi-chart-pie" },
              { type: "li", title: "زیر شاخه 3", subicons: "mdi mdi-chart-pie" },
              { type: "li", title: "زیر شاخه 4", subicons: "mdi mdi-chart-pie" },
              { type: "li", title: "زیر شاخه 1", subicons: "mdi mdi-chart-pie" },
              { type: "li", title: "زیر شاخه 2", subicons: "mdi mdi-chart-pie" },
              { type: "li", title: "زیر شاخه 3", subicons: "mdi mdi-chart-pie" }
            ]
        },
        {
          type: "ul", title: "ردیف 2", classNameSpan: "caret", classNameUl: "nested", subicons: "mdi-checkbox-blank-circle",
          subMenu:
            [
              { type: "li", title: "زیر شاخه 1", subicons: "mdi mdi-checkbox-blank-circle-outline" },
              { type: "li", title: "زیر شاخه 2", subicons: "mdi mdi-checkbox-blank-circle-outline" },
              { type: "li", title: "زیر شاخه 3", subicons: "mdi mdi-checkbox-blank-circle-outline" },
              { type: "li", title: "زیر شاخه 4", subicons: "mdi mdi-checkbox-blank-circle-outline" }
            ]
        },
        {
          type: "ul", title: "ردیف 3", classNameSpan: "caret", classNameUl: "nested", subicons: "mdi-checkbox-blank-circle",
          subMenu:
            [
              { type: "li", title: "زیر شاخه 1", subicons: "mdi mdi-checkbox-blank-circle-outline" },
              { type: "li", title: "زیر شاخه 2", subicons: "mdi mdi-checkbox-blank-circle-outline" },
              { type: "li", title: "زیر شاخه 3", subicons: "mdi mdi-checkbox-blank-circle-outline" },
              {
                type: "li", title: "زیر شاخه 4 ", classNameSpan: "caret", classNameUl: "nested", subicons: "mdi mdi-checkbox-blank-circle-outline",
                subMenu:
                  [
                    {
                      type: "li", title: " 1ژیر شاخه اخر", classNameSpan: "caret", subicons: "mdi mdi-checkbox-marked-circle-outline",
                      subMenu:
                        [
                          { type: "li", title: " 2ژیر شاخه اخر", subicons: "mdi mdi-checkbox-marked-circle-outline" },
                          { type: "li", title: " 2ژیر شاخه اخر", subicons: "mdi mdi-checkbox-marked-circle-outline" },
                          { type: "li", title: " 2ژیر شاخه اخر", subicons: "mdi mdi-checkbox-marked-circle-outline" },
                        ]
                    },
                    { type: "li", title: " 2ژیر شاخه اخر", subicons: "mdi mdi-checkbox-marked-circle-outline" },
                    { type: "li", title: " 3ژیر شاخه اخر", subicons: "mdi mdi-checkbox-marked-circle-outline" },

                  ]
              }
            ]
        },
      ]
    }
  }
  rendersSubmenu = (o) => {
    debugger
    return (<ul className={o.classNameUl}>
      {o.subMenu.map(n => {
        return (
          <li className={n.subMenu ? o.classNameSpan : null}><span className={n.subicons} />{n.title}{n.subMenu ? (this.rendersSubmenu(n)) : null}</li>
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
          <li><span className={o.classNameSpan}><span className={o.subicons} />{o.title}</span>
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
