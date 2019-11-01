module.exports=function(e){var r={};function t(s){if(r[s])return r[s].exports;var n=r[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=e,t.c=r,t.d=function(e,r,s){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:s})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(t.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)t.d(s,n,function(r){return e[r]}.bind(null,n));return s},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=12)}([function(e,r,t){"use strict";var s=t(1),n=t.n(s);t(14).config();const o=n.a.object().keys({NODE_ENV:n.a.string().default("development").allow(["development","production"]),PORT:n.a.number().default(8080),MYSQL_PORT:n.a.number().default(3306),MYSQL_HOST:n.a.string().default("127.0.0.1"),MYSQL_USER:n.a.string(),MYSQL_PASS:n.a.string(),MYSQL_NAME:n.a.string(),VERSION:n.a.string()}).unknown().required(),{error:a,value:i}=n.a.validate(process.env,o);if(a)throw new Error(`Config validation error: ${a.message}`);const c={version:i.VERSION,env:i.NODE_ENV,port:i.PORT,mysqlPort:i.MYSQL_PORT,mysqlHost:i.MYSQL_HOST,mysqlUserName:i.MYSQL_USER,mysqlPass:i.MYSQL_PASS,mysqlDatabase:i.MYSQL_DATABASE};r.a=c},function(e,r){e.exports=require("joi")},function(e,r){e.exports=require("express")},function(e,r){e.exports=require("mysql")},function(e,r){e.exports=require("express-validation")},function(e,r){e.exports=require("jsonwebtoken")},function(e,r){e.exports=require("bcrypt")},function(e,r){e.exports=require("http-status")},function(e,r){e.exports=require("body-parser")},function(e,r,t){"use strict";var s=t(2),n=t.n(s),o=t(0),a=t(3),i=t.n(a),c=t(4),u=t.n(c),l=t(5),d=t.n(l);const m=i.a.createPool({connectionLimit:10,host:o.a.mysqlHost,user:o.a.mysqlUserName,password:o.a.mysqlPass,database:o.a.mysqlDatabase});var p=()=>new Promise((e,r)=>{m.getConnection((t,s)=>{t?r(t):s.query("SELECT\n            *\n          FROM\n            Article",(t,n)=>{t?(console.error("SQL error: ",t),r(t)):e(n),s.release()})})}),f=e=>new Promise((r,t)=>{m.getConnection((s,n)=>{s?t(s):n.query("INSERT INTO Article SET ?",e,(e,s)=>{e?(console.error("SQL error: ",e),t(e)):1===s.affectedRows&&r(`新增成功！ article_id: ${s.insertId}`),n.release()})})}),y=(e,r)=>new Promise((t,s)=>{m.getConnection((n,o)=>{n?s(n):o.query("UPDATE Article SET ? WHERE article_id = ?",[e,r],(e,r)=>{e?(console.error("SQL error: ",e),s(e)):0===r.affectedRows?t("請確認修改Id！"):r.message.match("Changed: 1")?t("資料修改成功"):t("資料無異動"),o.release()})})}),g=e=>new Promise((r,t)=>{m.getConnection((s,n)=>{s?t(s):n.query("DELETE FROM Article WHERE article_id = ?",e,(e,s)=>{e?(console.error("SQL error: ",e),t(e)):1===s.affectedRows?r("刪除成功！"):r("刪除失敗！"),n.release()})})}),_=e=>new Promise((r,t)=>{d.a.verify(e,"my_secret_key",(e,s)=>{if(e)t(e);else{const e=s.payload.user_id;m.getConnection((s,n)=>{s?t(s):n.query("SELECT * FROM Article WHERE user_id = ?",[e],(e,s)=>{e?t(e):r(s),n.release()})}),r(payload)}})});var h=(e,r)=>{p().then(e=>{r.send(e)}).catch(e=>r.send(e))},E=(e,r)=>{const t=e.body;f(t).then(e=>{r.send(e)}).catch(e=>r.send(e))},b=(e,r)=>{const t=e.params.article_id,s=e.body;y(s,t).then(e=>{r.send(e)}).catch(e=>r.send(e))},S=(e,r)=>{const t=e.params.article_id;g(t).then(e=>{r.send(e)}).catch(e=>r.send(e))},q=(e,r)=>{_(e.token).then(e=>{r.send(e)}).catch(e=>r.status(401).send(e))},v=t(1),P=t.n(v),O={createArticle:{body:{user_id:P.a.number().required(),article_title:P.a.string().required(),article_tag:P.a.string().required(),article_content:P.a.string().min(20).required()}},createUser:{body:{user_name:P.a.string().required(),user_mail:P.a.string().email().trim().required(),user_password:P.a.string().regex(/[a-zA-Z0-9]{6,30}$/).required()}}};const w=n.a.Router();w.route("/").get(h).post(u()(O.createArticle),E),w.route("/:article_id").put(b).delete(S),w.get("/personal",(e,r,t)=>{const s=e.headers.authorization;if(void 0!==s){const r=s.split(" ")[1];e.token=r,t()}else r.status(403).send(Object.assign({code:403},{message:"您尚未登入！"}))},q);var L=w,R=t(6),T=t.n(R),x=t(7),M=t.n(x);class Q extends Error{constructor(e,r,t,s){super(e),this.message=e,this.name=this.constructor.name,this.status=r,this.isPublic=t,this.code=s,this.isOperational=!0,Error.captureStackTrace(this,this.constructor.name)}}var j={LoginError1:class extends Q{constructor(e="信箱尚未註冊！",r=M.a.NOT_FOUND,t=!0,s=401){super(e,r,t,s),this.name="LoginError"}},LoginError2:class extends Q{constructor(e="您輸入的密碼有誤！",r=M.a.NOT_FOUND,t=!0,s=401){super(e,r,t,s),this.name="LoginError"}}};const N=i.a.createPool({connectionLimit:10,host:o.a.mysqlHost,user:o.a.mysqlUserName,password:o.a.mysqlPass,database:o.a.mysqlDatabase});var A=e=>new Promise((r,t)=>{N.getConnection((s,n)=>{s?t(s):n.query("INSERT INTO User SET ?",e,(e,s)=>{e?(console.error("SQL error: ",e),t(e)):1===s.affectedRows&&r(`新增成功！ user_id: ${s.insertId}`),n.release()})})}),C=()=>new Promise((e,r)=>{N.getConnection((t,s)=>{t?r(t):s.query("SELECT\n            *\n          FROM\n            User",(t,n)=>{t?(console.error("SQL error: ",t),r(t)):e(n),s.release()})})}),U=(e,r)=>new Promise((t,s)=>{N.getConnection((n,o)=>{n?s(n):o.query("UPDATE User SET ? WHERE user_id = ?",[e,r],(e,r)=>{e?(console.error("SQL error: ",e),s(e)):0===r.affectedRows?t("請確認修改Id！"):r.message.match("Changed: 1")?t("資料修改成功"):t("資料無異動"),o.release()})})}),D=e=>new Promise((r,t)=>{N.getConnection((s,n)=>{s?t(s):n.query("DELETE FROM User WHERE user_id = ?",e,(e,s)=>{e?(console.error("SQL error: ",e),t(e)):1===s.affectedRows?r("刪除成功！"):r("刪除失敗！"),n.release()})})}),k=e=>new Promise((r,t)=>{N.getConnection((s,n)=>{s?t(s):n.query("SELECT * FROM User WHERE user_mail = ?",e.user_mail,(s,o)=>{if(s)console.error("SQL error: ",s),t(s);else if(0===Object.keys(o).length)t(new j.LoginError1);else{const s=o[0].user_password,n=e.user_password;T.a.compare(n,s).then(e=>{if(e){const e={user_id:o[0].user_id,user_name:o[0].user_name,user_mail:o[0].user_mail},t=d.a.sign({payload:e,exp:Math.floor(Date.now()/1e3)+900},"my_secret_key");r(Object.assign({code:200},{message:"登入成功",token:t}))}else t(new j.LoginError2)})}n.release()})})});var H=(e,r)=>{const t={user_name:e.body.user_name,user_mail:e.body.user_mail,user_password:T.a.hashSync(e.body.user_password,10)};A(t).then(e=>{r.send(e)}).catch(e=>r.send(e))},I=(e,r)=>{C().then(e=>{r.send(e)}).catch(e=>r.send(e))},Y=(e,r)=>{const t=e.params.user_id,s=e.body;U(s,t).then(e=>{r.send(e)}).catch(e=>r.send(e))},$=(e,r)=>{const t=e.params.user_id;D(t).then(e=>{r.send(e)}).catch(e=>r.send(e))},F=(e,r,t)=>{const s=e.body;k(s).then(e=>{r.send(e)}).catch(e=>{t(e)})};const V=n.a.Router();V.route("/").get(I).post(u()(O.createUser),H),V.route("/:user_id").put(Y).delete($),V.route("/login").post(F);var W=V;const z=n.a.Router();z.get("/",(e,r)=>{r.send(`此路徑是: localhost:${o.a.port}/api`)}),z.get("/sqlTest",(e,r)=>{i.a.createPool({connectionLimit:10,host:o.a.mysqlHost,user:o.a.mysqlUserName,password:o.a.mysqlPass,database:o.a.mysqlDatabase}).getConnection((e,t)=>{e?(r.send(e),console.log("連線失敗！")):(r.send("連線成功！"),console.log(t))})}),z.use("/article",L),z.use("/user",W);var B=z,Z=t(8),G=t.n(Z),J=t(10),K=t.n(J),X=t(11),ee=t.n(X);const re=n()();re.use(G.a.json()),re.use(G.a.urlencoded({extended:!0})),re.use((e,r,t,s)=>{let n,o,a;if(e instanceof expressValidation.ValidationError){return"query"!==e.errors[0].location&&"body"!==e.errors[0].location||(n=e.errors[0].messages,o=400,a=httpStatus.BAD_REQUEST),s(new j.APIError(n,a,!0,o))}return s(e)}),re.use((e,r,t,s)=>{t.status(e.status).json({message:e.isPublic?e.message:httpStatus[e.status],code:e.code?e.code:httpStatus[e.status],stack:"development"===o.a.env?e.stack:{}}),s()}),re.use(K()()),re.use(ee()("dev")),re.get("/",(e,r)=>{r.send(`server started on  port http://127.0.0.1:${o.a.port} (${o.a.env})`)}),re.use("/api",B);r.a=re},function(e,r){e.exports=require("cors")},function(e,r){e.exports=require("morgan")},function(e,r,t){"use strict";t.r(r),function(e){var s=t(0),n=t(9);e.parent||n.a.listen(s.a.port,()=>{console.log(`server started on  port http://127.0.0.1:${s.a.port} (${s.a.env})`)}),r.default=n.a}.call(this,t(13)(e))},function(e,r){e.exports=function(e){if(!e.webpackPolyfill){var r=Object.create(e);r.children||(r.children=[]),Object.defineProperty(r,"loaded",{enumerable:!0,get:function(){return r.l}}),Object.defineProperty(r,"id",{enumerable:!0,get:function(){return r.i}}),Object.defineProperty(r,"exports",{enumerable:!0}),r.webpackPolyfill=1}return r}},function(e,r){e.exports=require("dotenv")}]);