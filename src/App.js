/**
 * @license
 *
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Main React component that includes the Blockly component.
 * @author samelh@google.com (Sam El-Husseini)
 */

import React from 'react';
import './App.css';

import Unity, {UnityContent} from "react-unity-webgl"
import BlocklyComponent, { Block, Value, Field, Shadow } from './Blockly';

import BlocklyJS from 'blockly/javascript';
import './blocks/customblocks';
import './generator/generator';





class App extends React.Component {
  constructor(props) {
    super(props);
    this.simpleWorkspace = React.createRef();
    this.unityContent = new UnityContent(
      "Orbital_web3/Build/Orbital_web3.json",
      "Orbital_web3/Build/UnityLoader.js"
    );
  }

  generateCode = () => {
    var code = BlocklyJS.workspaceToCode(this.simpleWorkspace.workspace);
    code+='this.unityContent.send(\'Player\',\'ArrList_Arr\');';
    eval(code);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BlocklyComponent ref={this.simpleWorkspace}
          readOnly={false} trashcan={true} media={'media/'}
          move={{
            scrollbars: true,
            drag: true,
            wheel: true
          }}
          initialXml={`
<xml xmlns="http://www.w3.org/1999/xhtml">
</xml>
      `}>
            <Block type="controls_repeat_ext">
              <Value name="TIMES">
                <Shadow type="math_number">
                  <Field name="NUM">10</Field>
                </Shadow>
              </Value>
            </Block>
            <Block type="controls_if"/>
            <Block type="Up" />
            <Block type="Down" />
            <Block type="Left" />
            <Block type="Right" />
          </BlocklyComponent>

          <div className="game">
            <Unity unityContent={this.unityContent} height="300px" width="400px"/>
          </div>
          <button onClick={this.generateCode}>Run</button>
        </header>
      </div>
    );
  }
}

export default App;
