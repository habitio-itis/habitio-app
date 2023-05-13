/**
 * @author: CHIKIRIAY
 * @created: 5/14/23
 * @Time: 2:08 AM
 */
import { TypeRootStackParamList } from "./src/navigation/Types";

declare global {
	namespace ReactNavigation {
		interface RootParamList extends TypeRootStackParamList {}
	}
}
