# storage

- 本地存储简单封装
- localStorage
- sessionStorage

## Usage

```js
import { storage } from '@/utils';
storage.local.set(key, data); //localStorage存储数据
storage.local.get(key); //localStorage获取数据
storage.local.del(key); //localStorage删除某个数据
storage.local.clear(); //localStorage清除所有数据
storage.local.set(key, data, aliveTime); //localStorage存储数据，aliveTime毫秒时间戳，表示存储的时间，超出这个时间则自动清除

storage.session.set(key, data); //sessionStorage存储数据
storage.session.get(key); //sessionStorage获取数据
storage.session.del(key); //sessionStorage删除某个数据
storage.session.clear(); //sessionStorage清除所有数据

```

### localStorage

```js
const Local_Storage_Type_Key = 'Local_Storage_Type_Key';
interface User {
  name: string;
  age: number;
}
const user: User = {
  name: '名字',
  age: 12,
};
storage.local.set<User>(Local_Storage_Type_Key, user);
const getLocalUser = storage.local.get<User>(Local_Storage_Type_Key);
console.log(getLocalUser); //{name:'名字',age:12}

```
### sessionStorage
```js

const Session_Storage_Type_Key = "Session_Storage_Type_Key";
storage.session.set<string>(Session_Storage_Type_Key, "jack");
const getName = storage.session.get<string>(Session_Storage_Type_Key);
console.log("getName", getName); //jack

```