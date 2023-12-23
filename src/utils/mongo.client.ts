import * as Realm from 'realm-web';

const REALM_APP_ID = "application-0-lnzoi";
export const app: Realm.App = new Realm.App({ id: REALM_APP_ID! });
export const credentials = Realm.Credentials.anonymous();
