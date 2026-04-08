import HookUseEffect from "../components/HookUseEffect";
import HookUseReducer from "../components/HookUseReducer";
import HookUseState from "../components/HookUseState";
import HookUseRef from "../components/HookUseRef";
import HookUseCallback from "../components/HookUseCallback";
import HookUseMemo from "../components/HookUseMemo";
import HookUseEffectLayout from "../components/HookUseEffectLayout";
import HookUseImperativeHandle from "../components/HookUseImperativeHandle";
import HookCustom from "../components/HookCustom";

// useContext
import { useContext } from "react";
import { SomeContext } from "../components/HookUseContext";

const Home = () => {
	const { contextValue } = useContext(SomeContext);

	return (
		<div className="App">
			<table>
				<thead>
					<tr>
						<th>Hook</th>
						<th>Aula</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>useState</td>
						<td>
							<HookUseState />
						</td>
					</tr>
					<tr>
						<td>useReducer</td>
						<td>
							<HookUseReducer />
						</td>
					</tr>
					<tr>
						<td>useEffect</td>
						<td>
							<HookUseEffect />
						</td>
					</tr>
					<tr>
						<td>useContext</td>
						<td>
							<p>Valor do contexto: {contextValue}</p>
						</td>
					</tr>
					<tr>
						<td>useRef</td>
						<td>
							<HookUseRef />
						</td>
					</tr>
					<tr>
						<td>useCallback</td>
						<td>
							<HookUseCallback />
						</td>
					</tr>
					<tr>
						<td>useMemo</td>
						<td>
							<HookUseMemo />
						</td>
					</tr>
					<tr>
						<td>useEffect (Layout)</td>
						<td>
							<HookUseEffectLayout />
						</td>
					</tr>
					<tr>
						<td>useImperativeHandle</td>
						<td>
							<HookUseImperativeHandle />
						</td>
					</tr>
					<tr>
						<td>Custom Hook</td>
						<td>
							<HookCustom />
						</td>
					</tr>
					<tr>
						<td>UseCallback</td>
						<td>
							<HookUseCallback />
						</td>
					</tr>
					<tr>
						<td>useMemo</td>
						<td>
							<HookUseMemo />
						</td>
					</tr>
					<tr>
						<td>useEffect (Layout)</td>
						<td>
							<HookUseEffectLayout />
						</td>
					</tr>
					<tr>
						<td>useImperativeHandle</td>
						<td>
							<HookUseImperativeHandle />
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Home;
