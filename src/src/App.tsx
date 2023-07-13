import { useEffect } from 'react'
import { GridStack, GridStackOptions } from 'gridstack'
import 'gridstack/dist/gridstack.min.css'
import 'gridstack/dist/gridstack-extra.min.css'
import './App.css'

function App() {
  useEffect(() => {
    const subOptions = {
      cellHeight: 50,
      column: 'auto',
      acceptWidgets: true,
      margin: 5,
      subGridDynamic: true,
      itemClass: 'sub',
    }
    const options = {
      animate: true,
      cellHeight: 50,
      margin: 5,
      minRow: 1,
      acceptWidgets: true,
      subGridOpts: subOptions,
      subGridDynamic: true,
      float: true,
    } as GridStackOptions
    const grid = GridStack.init(options)
    console.debug(`🚀${(new Date()).toISOString()} ~ file: App.tsx:28 ~ useEffect ~ grid:`, grid)
    const grid2 = GridStack.init({
      cellHeight: 50,
      acceptWidgets: '.grid-stack-item.sub',
      disableOneColumnMode: true,
      margin: 1
    }, '.grid-stack.nested2');
    console.debug(`🚀${(new Date()).toISOString()} ~ file: App.tsx:34 ~ useEffect ~ grid2:`, grid2)
    console.debug(
      `🚀${new Date().toISOString()} ~ file: App.tsx:35 ~ useEffect ~ grid.save:`,
      grid?.save(false, true)
    )
  }, [])

  return (
    <div className="grid-stack">
      <div
        className="grid-stack-item sub"
        id={'uuid'}
        key={'uuid'}
        gs-w={3}
        gs-min-w={2}
        data-gs-auto-position="1"
        gs-id='{"id":"ds23","data":{"as":12,"as4":{"ds":12,"fdf3":344}}}'
      >
        <div className="grid-stack-item-content">
          <button onClick={() => alert('asdasbcubasc absd ')}>
            as das
          </button>
        </div>
      </div>
      <div
        className="grid-stack-item sub"
        id={'uuid1'}
        key={'uuid1'}
        gs-w={3}
        gs-min-w={2}
        data-gs-auto-position="5"
      >
        <div className="grid-stack-item-content">
          <button onClick={() => alert('asdasbcubasc absd ')}>
            as das asd as
          </button>
        </div>
      </div>

      <div className="grid-stack-item grid-stack-draggable-item" gs-x="5" gs-y="0" gs-w="3" gs-h="4">
        <div className="grid-stack-item-content">
          <button onClick={() => alert('asdasbcubasc absd 7')}>
            nested
          </button>
          <div className="grid-stack nested2">
            <div className="grid-stack-item sub" gs-x="0" gs-y="0" gs-w="3">
              <div className="grid-stack-item-content" >
                <button onClick={() => alert('asdasbcubasc absd 7')} >
                  7
                </button>
              </div>
            </div>
            <div className="grid-stack-item sub" gs-x="5" gs-y="5" gs-w="3" gs-h="3">
              <div className="grid-stack-item-content">
                <button onClick={() => alert('asdasbcubasc absd 7')} >
                  8
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
