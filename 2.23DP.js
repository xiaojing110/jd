const $=new Env("\x32\x2e\x32\x33\x2d\x32\x2e\x32\x38\u5927\u724c\u96c6\u5408");const jdCookieNode=$['\x69\x73\x4e\x6f\x64\x65']()?require('\x2e\x2f\x6a\x64\x43\x6f\x6f\x6b\x69\x65\x2e\x6a\x73'):'';const notify=$['\x69\x73\x4e\x6f\x64\x65']()?require('\x2e\x2f\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79'):'';let cookiesArr=[],cookie='',message='';let ownCode=null;if($['\x69\x73\x4e\x6f\x64\x65']()){window["\x4f\x62\x6a\x65\x63\x74"]['\x6b\x65\x79\x73'](jdCookieNode)['\x66\x6f\x72\x45\x61\x63\x68']((item)=>{cookiesArr['\x70\x75\x73\x68'](jdCookieNode[item])})if(process['\x65\x6e\x76']['\x4a\x44\x5f\x44\x45\x42\x55\x47']&&process['\x65\x6e\x76']['\x4a\x44\x5f\x44\x45\x42\x55\x47']==='\x66\x61\x6c\x73\x65')console['\x6c\x6f\x67']=()=>{}}else{let cookiesData=$['\x67\x65\x74\x64\x61\x74\x61']('\x43\x6f\x6f\x6b\x69\x65\x73\x4a\x44')||"\x5b\x5d";cookiesData=JSON['\x70\x61\x72\x73\x65'](cookiesData);cookiesArr=cookiesData['\x6d\x61\x70'](item=>item['\x63\x6f\x6f\x6b\x69\x65']);cookiesArr['\x72\x65\x76\x65\x72\x73\x65']();cookiesArr['\x70\x75\x73\x68'](...[$['\x67\x65\x74\x64\x61\x74\x61']('\x43\x6f\x6f\x6b\x69\x65\x4a\x44\x32'),$['\x67\x65\x74\x64\x61\x74\x61']('\x43\x6f\x6f\x6b\x69\x65\x4a\x44')]);cookiesArr['\x72\x65\x76\x65\x72\x73\x65']();cookiesArr=cookiesArr['\x66\x69\x6c\x74\x65\x72'](item=>!!item)}!(async()=>{if(!cookiesArr[0]){$['\x6d\x73\x67']($['\x6e\x61\x6d\x65'],'\u3010\u63d0\u793a\u3011\u8bf7\u5148\u83b7\u53d6\u4eac\u4e1c\u8d26\u53f7\u4e00\x63\x6f\x6f\x6b\x69\x65\n\u76f4\u63a5\u4f7f\u7528\x4e\x6f\x62\x79\x44\x61\u7684\u4eac\u4e1c\u7b7e\u5230\u83b7\u53d6','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x62\x65\x61\x6e\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x62\x65\x61\x6e\x2f\x73\x69\x67\x6e\x49\x6e\x64\x65\x78\x2e\x61\x63\x74\x69\x6f\x6e',{"\x6f\x70\x65\x6e\x2d\x75\x72\x6c":"\x68\x74\x74\x70\x73\x3a\x2f\x2f\x62\x65\x61\x6e\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x62\x65\x61\x6e\x2f\x73\x69\x67\x6e\x49\x6e\x64\x65\x78\x2e\x61\x63\x74\x69\x6f\x6e"});return}for(let i=0;i<cookiesArr['\x6c\x65\x6e\x67\x74\x68'];i++){if(cookiesArr[i]){cookie=cookiesArr[i]originCookie=cookiesArr[i]newCookie=''$['\x55\x73\x65\x72\x4e\x61\x6d\x65']=decodeURIComponent(cookie['\x6d\x61\x74\x63\x68'](/pt_pin=(.+?);/)&&cookie['\x6d\x61\x74\x63\x68'](/pt_pin=(.+?);/)[1])$['\x69\x6e\x64\x65\x78']=i+1;$['\x69\x73\x4c\x6f\x67\x69\x6e']=true;$['\x6e\x69\x63\x6b\x4e\x61\x6d\x65']='';await checkCookie();console['\x6c\x6f\x67'](`\n******开始【京东账号${$['\x69\x6e\x64\x65\x78']}】${$['\x6e\x69\x63\x6b\x4e\x61\x6d\x65']||$['\x55\x73\x65\x72\x4e\x61\x6d\x65']}*********\n\x60);if(!$['\x69\x73\x4c\x6f\x67\x69\x6e']){$['\x6d\x73\x67']($['\x6e\x61\x6d\x65'],`【提示】cookie已失效`,`京东账号${$['\x69\x6e\x64\x65\x78']}${$['\x6e\x69\x63\x6b\x4e\x61\x6d\x65']||$['\x55\x73\x65\x72\x4e\x61\x6d\x65']}\n\u8bf7\u91cd\u65b0\u767b\u5f55\u83b7\u53d6\n\x68\x74\x74\x70\x73:if($['\x69\x73\x4e\x6f\x64\x65']()){}continue}$['\x62\x65\x61\x6e']=0;$['\x41\x44\x49\x44']=getUUID('\x78\x78\x78\x78\x78\x78\x78\x78\x2d\x78\x78\x78\x78\x2d\x78\x78\x78\x78\x2d\x78\x78\x78\x78\x2d\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78',1);$['\x55\x55\x49\x44']=getUUID('\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78');authorCodeList=['\x57\x6a\x62\x76\x50\x75\x76\x50\x50\x50\x71\x41\x42\x62\x5a\x6c\x77\x31\x5a\x78\x44\x46\x34\x74\x4c\x4e\x59\x41\x34\x73\x65\x75\x41\x36\x37\x4d\x4f\x49\x59\x51\x78\x45\x6b\x33\x56\x6c\x39\x2b\x41\x56\x6f\x34\x4e\x46\x2b\x74\x67\x79\x65\x49\x63\x36\x41\x36\x6b\x64\x4b\x33\x72\x4c\x42\x51\x70\x45\x51\x48\x39\x56\x34\x74\x64\x72\x72\x68\x30\x77\x3d\x3d',]$['\x61\x70\x70\x6b\x65\x79']="\x35\x31\x42\x35\x39\x42\x42\x38\x30\x35\x39\x30\x33\x44\x41\x34\x43\x45\x35\x31\x33\x44\x32\x39\x45\x43\x34\x34\x38\x33\x37\x35"$['\x75\x73\x65\x72\x49\x64']="\x31\x30\x32\x39\x39\x31\x37\x31"$['\x61\x63\x74\x49\x64']="\x62\x32\x31\x33\x35\x31\x35\x38\x61\x32\x63\x38\x34\x64\x33\x30\x39\x63\x63\x63\x32\x61\x5f\x32\x32\x30\x32\x32\x33"$['\x61\x75\x74\x68\x6f\x72\x43\x6f\x64\x65']=ownCode?ownCode:authorCodeList[random(0,authorCodeList['\x6c\x65\x6e\x67\x74\x68'])]console['\x6c\x6f\x67']('\u53bb\u52a9\u529b \x2d\x3e '+$['\x61\x75\x74\x68\x6f\x72\x43\x6f\x64\x65']);await openCardNew();if($['\x62\x65\x61\x6e']>0){message+=`\n\u3010\u4eac\u4e1c\u8d26\u53f7${$['\x69\x6e\x64\x65\x78']}】${$['\x6e\x69\x63\x6b\x4e\x61\x6d\x65']||$['\x55\x73\x65\x72\x4e\x61\x6d\x65']}\n\u2514\u83b7\u5f97${$['\x62\x65\x61\x6e']}京豆。`}}}if(message!==''){if($['\x69\x73\x4e\x6f\x64\x65']()){await notify['\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79']($['\x6e\x61\x6d\x65'],message,'',`\n\x60)}else{$['\x6d\x73\x67']($['\x6e\x61\x6d\x65'],'\u6709\u70b9\u513f\u6536\u83b7',message)}}})()['\x63\x61\x74\x63\x68']((e)=>{$['\x6c\x6f\x67']('',`❌${$['\x6e\x61\x6d\x65']},失败!原因:${e}!`,'')})['\x66\x69\x6e\x61\x6c\x6c\x79'](()=>{$['\x64\x6f\x6e\x65']()})async function openCardNew(){$['\x74\x6f\x6b\x65\x6e']=null;$['\x62\x75\x79\x65\x72\x4e\x69\x63\x6b']=null;$['\x61\x63\x74\x69\x76\x69\x74\x79\x49\x6e\x66\x6f']=null;await getToken();if($['\x74\x6f\x6b\x65\x6e']){await task('\x61\x63\x74\x69\x76\x69\x74\x79\x5f\x6c\x6f\x61\x64',{"\x61\x63\x74\x49\x64":$['\x61\x63\x74\x49\x64'],"\x69\x6e\x76\x69\x74\x65\x4e\x69\x63\x6b":$['\x61\x75\x74\x68\x6f\x72\x43\x6f\x64\x65'],"\x6a\x64\x54\x6f\x6b\x65\x6e":$['\x74\x6f\x6b\x65\x6e'],"\x73\x6f\x75\x72\x63\x65":"\x30\x31",})if($['\x62\x75\x79\x65\x72\x4e\x69\x63\x6b']){console['\x6c\x6f\x67']('\x31\x2e\u52a9\u529b\u7801 \x2d\x3e '+$['\x62\x75\x79\x65\x72\x4e\x69\x63\x6b'])if($['\x69\x6e\x64\x65\x78']===1){ownCode=$['\x62\x75\x79\x65\x72\x4e\x69\x63\x6b'] console['\x6c\x6f\x67']("\u540e\u9762\u7684\u5c06\u7ed9\u8fd9\u4e2a\u52a9\u529b\u7801\u52a9\u529b \x2d\x3e "+ownCode)}console['\x6c\x6f\x67']('\x32\x2e\u7ed1\u5b9a\u52a9\u529b \x2d\x3e')await task('\x63\x6f\x6d\x70\x6c\x65\x74\x65\x2f\x6d\x69\x73\x73\x69\x6f\x6e',{"\x61\x63\x74\x49\x64":$['\x61\x63\x74\x49\x64'],"\x6d\x69\x73\x73\x69\x6f\x6e\x54\x79\x70\x65":"\x72\x65\x6c\x61\x74\x69\x6f\x6e\x42\x69\x6e\x64","\x69\x6e\x76\x69\x74\x65\x72\x4e\x69\x63\x6b":$['\x61\x75\x74\x68\x6f\x72\x43\x6f\x64\x65'],})await task('\x73\x68\x6f\x70\x4c\x69\x73\x74',{"\x61\x63\x74\x49\x64":$['\x61\x63\x74\x49\x64'],})console['\x6c\x6f\x67']('\x33\x2e\u5173\u6ce8\u5e97\u94fa \x2d\x3e')await task('\x63\x6f\x6d\x70\x6c\x65\x74\x65\x2f\x6d\x69\x73\x73\x69\x6f\x6e',{"\x61\x63\x74\x49\x64":$['\x61\x63\x74\x49\x64'],"\x6d\x69\x73\x73\x69\x6f\x6e\x54\x79\x70\x65":"\x75\x6e\x69\x74\x65\x43\x6f\x6c\x6c\x65\x63\x74\x53\x68\x6f\x70",})console['\x6c\x6f\x67']('\x34\x2e\u62bd\u5956 \x2d\x3e')await task('\x64\x72\x61\x77\x2f\x70\x6f\x73\x74',{"\x61\x63\x74\x49\x64":$['\x61\x63\x74\x49\x64'],"\x75\x73\x65\x64\x47\x61\x6d\x65\x4e\x75\x6d":"\x32","\x64\x61\x74\x61\x54\x79\x70\x65":"\x64\x72\x61\x77",})console['\x6c\x6f\x67']('\x35\x2e\u52a0\u5165\u4f1a\u5458 \x2d\x3e')if($['\x73\x68\x6f\x70\x4c\x69\x73\x74']){console['\x6c\x6f\x67']('\u4f1a\u5458\u5361\u6570\u91cf \x2d\x3e '+$['\x73\x68\x6f\x70\x4c\x69\x73\x74']['\x6c\x65\x6e\x67\x74\x68'])for(const vo of $['\x73\x68\x6f\x70\x4c\x69\x73\x74']){$['\x6c\x6f\x67'](`${vo['\x75\x73\x65\x72\x49\x64']}`)if(!vo['\x6f\x70\x65\x6e']){$['\x6c\x6f\x67']("\u5f00\u901a\u4f1a\u5458")await getShopOpenCardInfo(vo['\x75\x73\x65\x72\x49\x64'])await bindWithVender(vo['\x75\x73\x65\x72\x49\x64'])await task('\x63\x6f\x6d\x70\x6c\x65\x74\x65\x2f\x6d\x69\x73\x73\x69\x6f\x6e',{"\x61\x63\x74\x49\x64":$['\x61\x63\x74\x49\x64'],"\x73\x68\x6f\x70\x49\x64":vo['\x75\x73\x65\x72\x49\x64'],"\x6d\x69\x73\x73\x69\x6f\x6e\x54\x79\x70\x65":"\x6f\x70\x65\x6e\x43\x61\x72\x64",})await $['\x77\x61\x69\x74'](3000)}else{$['\x6c\x6f\x67']("\u5df2\u7ecf\u662f\u4f1a\u5458\u4e86")}await $['\x77\x61\x69\x74'](500)}}console['\x6c\x6f\x67']('\x36\x2e\u52a0\u5165\u8d2d\u7269\u8f66 \x2d\x3e')await task('\x63\x6f\x6d\x70\x6c\x65\x74\x65\x2f\x6d\x69\x73\x73\x69\x6f\x6e',{"\x61\x63\x74\x49\x64":$['\x61\x63\x74\x49\x64'],"\x6d\x69\x73\x73\x69\x6f\x6e\x54\x79\x70\x65":"\x75\x6e\x69\x74\x65\x41\x64\x64\x43\x61\x72\x74",})}else{$['\x6c\x6f\x67']("\u6ca1\u6709\u6210\u529f\u83b7\u53d6\u5230\u7528\u6237\u4fe1\u606f")}}else{$['\x6c\x6f\x67']("\u6ca1\u6709\u6210\u529f\u83b7\u53d6\u5230\u7528\u6237\u9274\u6743\u4fe1\u606f")}}function task(pglgnq1,T2){body={"\x6a\x73\x6f\x6e\x52\x70\x63":"\x32\x2e\x30","\x70\x61\x72\x61\x6d\x73":{"\x63\x6f\x6d\x6d\x6f\x6e\x50\x61\x72\x61\x6d\x65\x74\x65\x72":{"\x61\x70\x70\x6b\x65\x79":$['\x61\x70\x70\x6b\x65\x79'],"\x6d":"\x50\x4f\x53\x54","\x74\x69\x6d\x65\x73\x74\x61\x6d\x70":new window["\x44\x61\x74\x65"](),"\x75\x73\x65\x72\x49\x64":$['\x75\x73\x65\x72\x49\x64']},"\x61\x64\x6d\x4a\x73\x6f\x6e":{"\x6d\x65\x74\x68\x6f\x64":`/openCardNew/${pglgnq1}`,"\x75\x73\x65\x72\x49\x64":$['\x75\x73\x65\x72\x49\x64'],"\x62\x75\x79\x65\x72\x4e\x69\x63\x6b":$['\x62\x75\x79\x65\x72\x4e\x69\x63\x6b']?$['\x62\x75\x79\x65\x72\x4e\x69\x63\x6b']:""}}}window["\x4f\x62\x6a\x65\x63\x74"]['\x61\x73\x73\x69\x67\x6e'](body['\x70\x61\x72\x61\x6d\x73']['\x61\x64\x6d\x4a\x73\x6f\x6e'],T2)return new Promise(resolve=>{$['\x70\x6f\x73\x74'](taskUrl(pglgnq1,body),async(err,resp,data)=>{try{if(err){$['\x6c\x6f\x67'](err)}else{if(data){data=JSON['\x70\x61\x72\x73\x65'](data);if(data['\x73\x75\x63\x63\x65\x73\x73']){if(data['\x64\x61\x74\x61']['\x73\x74\x61\x74\x75\x73']===200){switch(pglgnq1){case'\x61\x63\x74\x69\x76\x69\x74\x79\x5f\x6c\x6f\x61\x64':$['\x62\x75\x79\x65\x72\x4e\x69\x63\x6b']=data['\x64\x61\x74\x61']['\x64\x61\x74\x61']['\x62\x75\x79\x65\x72\x4e\x69\x63\x6b'];console['\x6c\x6f\x67']("\x5b "+data['\x64\x61\x74\x61']['\x64\x61\x74\x61']['\x63\x75\x73\x41\x63\x74\x69\x76\x69\x74\x79']['\x61\x63\x74\x4e\x61\x6d\x65']+"\x8 \x5d");break;case'\x73\x68\x6f\x70\x4c\x69\x73\x74':$['\x73\x68\x6f\x70\x4c\x69\x73\x74']=data['\x64\x61\x74\x61']['\x64\x61\x74\x61']['\x63\x75\x73\x53\x68\x6f\x70\x73'];break;case'\x63\x6f\x6d\x70\x6c\x65\x74\x65\x2f\x6d\x69\x73\x73\x69\x6f\x6e':console['\x6c\x6f\x67'](data['\x64\x61\x74\x61']['\x64\x61\x74\x61']['\x72\x65\x6d\x61\x72\x6b']);break;case'\x64\x72\x61\x77\x2f\x70\x6f\x73\x74':console['\x6c\x6f\x67'](data['\x64\x61\x74\x61']['\x64\x61\x74\x61']['\x61\x77\x61\x72\x64\x53\x65\x74\x74\x69\x6e\x67']['\x61\x77\x61\x72\x64\x4e\x61\x6d\x65']);break;default:break}}}}else{$['\x6c\x6f\x67']("\u4eac\u4e1c\u6ca1\u6709\u8fd4\u56de\u6570\u636e")}}}catch(error){$['\x6c\x6f\x67'](error)}finally{resolve()}})})}function getShopOpenCardInfo(lG3){let opt={url:`https:headers:{Host:'\x61\x70\x69\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d',Accept:'\x2a\x2f\x2a',Connection:'\x6b\x65\x65\x70\x2d\x61\x6c\x69\x76\x65',Cookie:cookie,'\x55\x73\x65\x72\x2d\x41\x67\x65\x6e\x74':`jdapp;iPhone;9.5.4;13.6;${$['\x55\x55\x49\x44']};network/wifi;ADID/${$['\x41\x44\x49\x44']};model/iPhone10,3;addressid/0;appBuild/167668;jdSupportDarkMode/0;Mozilla/5.0(iPhone;CPU iPhone OS 13_6 like Mac OS X)AppleWebKit/605.1.15(KHTML,like Gecko)Mobile/15E148;supportJDSHWK/1`,'\x41\x63\x63\x65\x70\x74\x2d\x4c\x61\x6e\x67\x75\x61\x67\x65':'\x7a\x68\x2d\x63\x6e',Referer:`https:'\x41\x63\x63\x65\x70\x74\x2d\x45\x6e\x63\x6f\x64\x69\x6e\x67':'\x67\x7a\x69\x70\x2c \x64\x65\x66\x6c\x61\x74\x65\x2c \x62\x72'}}return new Promise(resolve=>{$['\x67\x65\x74'](opt,(err,resp,data)=>{try{if(err){console['\x6c\x6f\x67'](err)}else{res=JSON['\x70\x61\x72\x73\x65'](data)if(res['\x73\x75\x63\x63\x65\x73\x73']){if(res['\x72\x65\x73\x75\x6c\x74']['\x69\x6e\x74\x65\x72\x65\x73\x74\x73\x52\x75\x6c\x65\x4c\x69\x73\x74']){$['\x6f\x70\x65\x6e\x43\x61\x72\x64\x41\x63\x74\x69\x76\x69\x74\x79\x49\x64']=res['\x72\x65\x73\x75\x6c\x74']['\x69\x6e\x74\x65\x72\x65\x73\x74\x73\x52\x75\x6c\x65\x4c\x69\x73\x74'][0]['\x69\x6e\x74\x65\x72\x65\x73\x74\x73\x49\x6e\x66\x6f']['\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64']}}}}catch(error){console['\x6c\x6f\x67'](error)}finally{resolve()}})})}function bindWithVender(lG3){let opt={url:`https:headers:{Host:'\x61\x70\x69\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d',Accept:'\x2a\x2f\x2a',Connection:'\x6b\x65\x65\x70\x2d\x61\x6c\x69\x76\x65',Cookie:cookie,'\x55\x73\x65\x72\x2d\x41\x67\x65\x6e\x74':`jdapp;iPhone;9.5.4;13.6;${$['\x55\x55\x49\x44']};network/wifi;ADID/${$['\x41\x44\x49\x44']};model/iPhone10,3;addressid/0;appBuild/167668;jdSupportDarkMode/0;Mozilla/5.0(iPhone;CPU iPhone OS 13_6 like Mac OS X)AppleWebKit/605.1.15(KHTML,like Gecko)Mobile/15E148;supportJDSHWK/1`,'\x41\x63\x63\x65\x70\x74\x2d\x4c\x61\x6e\x67\x75\x61\x67\x65':'\x7a\x68\x2d\x63\x6e',Referer:`https:'\x41\x63\x63\x65\x70\x74\x2d\x45\x6e\x63\x6f\x64\x69\x6e\x67':'\x67\x7a\x69\x70\x2c \x64\x65\x66\x6c\x61\x74\x65\x2c \x62\x72'}}return new Promise(resolve=>{$['\x67\x65\x74'](opt,(err,resp,data)=>{try{if(err){console['\x6c\x6f\x67'](err)}else{res=JSON['\x70\x61\x72\x73\x65'](data)if(res['\x73\x75\x63\x63\x65\x73\x73']){console['\x6c\x6f\x67']("\u5f00\u5361\u6210\u529f")}}}catch(error){console['\x6c\x6f\x67'](error)}finally{resolve()}})})}function taskUrl(pglgnq1,Wbo4){return{url:`https:headers:{Host:'\x6a\x69\x6e\x67\x67\x65\x6e\x67\x6a\x63\x71\x2d\x69\x73\x76\x2e\x69\x73\x76\x6a\x63\x6c\x6f\x75\x64\x2e\x63\x6f\x6d',Accept:'\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e','\x58\x2d\x52\x65\x71\x75\x65\x73\x74\x65\x64\x2d\x57\x69\x74\x68':'\x58\x4d\x4c\x48\x74\x74\x70\x52\x65\x71\x75\x65\x73\x74','\x41\x63\x63\x65\x70\x74\x2d\x4c\x61\x6e\x67\x75\x61\x67\x65':'\x7a\x68\x2d\x63\x6e','\x41\x63\x63\x65\x70\x74\x2d\x45\x6e\x63\x6f\x64\x69\x6e\x67':'\x67\x7a\x69\x70\x2c \x64\x65\x66\x6c\x61\x74\x65\x2c \x62\x72','\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65':'\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b \x63\x68\x61\x72\x73\x65\x74\x3d\x75\x74\x66\x2d\x38',Origin:'\x68\x74\x74\x70\x73\x3a\x2f\x2f\x6a\x69\x6e\x67\x67\x65\x6e\x67\x6a\x63\x71\x2d\x69\x73\x76\x2e\x69\x73\x76\x6a\x63\x6c\x6f\x75\x64\x2e\x63\x6f\x6d','\x55\x73\x65\x72\x2d\x41\x67\x65\x6e\x74':`jdapp;iPhone;9.5.4;13.6;${$['\x55\x55\x49\x44']};network/wifi;ADID/${$['\x41\x44\x49\x44']};model/iPhone10,3;addressid/0;appBuild/167668;jdSupportDarkMode/0;Mozilla/5.0(iPhone;CPU iPhone OS 13_6 like Mac OS X)AppleWebKit/605.1.15(KHTML,like Gecko)Mobile/15E148;supportJDSHWK/1`,Connection:'\x6b\x65\x65\x70\x2d\x61\x6c\x69\x76\x65',Referer:'\x68\x74\x74\x70\x73\x3a\x2f\x2f\x6a\x69\x6e\x67\x67\x65\x6e\x67\x6a\x63\x71\x2d\x69\x73\x76\x2e\x69\x73\x76\x6a\x63\x6c\x6f\x75\x64\x2e\x63\x6f\x6d\x2f\x66\x72\x6f\x6e\x74\x68\x35\x2f',Cookie:cookie},Wbo4:JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](Wbo4)}}function getMyPing(){let opt={url:`https:headers:{Host:'\x6c\x7a\x64\x7a\x31\x2d\x69\x73\x76\x2e\x69\x73\x76\x6a\x63\x6c\x6f\x75\x64\x2e\x63\x6f\x6d',Accept:'\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e','\x58\x2d\x52\x65\x71\x75\x65\x73\x74\x65\x64\x2d\x57\x69\x74\x68':'\x58\x4d\x4c\x48\x74\x74\x70\x52\x65\x71\x75\x65\x73\x74','\x41\x63\x63\x65\x70\x74\x2d\x4c\x61\x6e\x67\x75\x61\x67\x65':'\x7a\x68\x2d\x63\x6e','\x41\x63\x63\x65\x70\x74\x2d\x45\x6e\x63\x6f\x64\x69\x6e\x67':'\x67\x7a\x69\x70\x2c \x64\x65\x66\x6c\x61\x74\x65\x2c \x62\x72','\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65':'\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x78\x2d\x77\x77\x77\x2d\x66\x6f\x72\x6d\x2d\x75\x72\x6c\x65\x6e\x63\x6f\x64\x65\x64',Origin:'\x68\x74\x74\x70\x73\x3a\x2f\x2f\x6c\x7a\x64\x7a\x31\x2d\x69\x73\x76\x2e\x69\x73\x76\x6a\x63\x6c\x6f\x75\x64\x2e\x63\x6f\x6d','\x55\x73\x65\x72\x2d\x41\x67\x65\x6e\x74':`jdapp;iPhone;9.5.4;13.6;${$['\x55\x55\x49\x44']};network/wifi;ADID/${$['\x41\x44\x49\x44']};model/iPhone10,3;addressid/0;appBuild/167668;jdSupportDarkMode/0;Mozilla/5.0(iPhone;CPU iPhone OS 13_6 like Mac OS X)AppleWebKit/605.1.15(KHTML,like Gecko)Mobile/15E148;supportJDSHWK/1`,Connection:'\x6b\x65\x65\x70\x2d\x61\x6c\x69\x76\x65',Referer:$['\x61\x63\x74\x69\x76\x69\x74\x79\x55\x72\x6c'],Cookie:cookie,},Wbo4:`userId=${$['\x61\x63\x74\x69\x76\x69\x74\x79\x53\x68\x6f\x70\x49\x64']}&token=${$['\x74\x6f\x6b\x65\x6e']}&fromType=APP&riskType=1`}return new Promise(resolve=>{$['\x70\x6f\x73\x74'](opt,(err,resp,data)=>{try{if(err){$['\x6c\x6f\x67'](err)}else{if(resp['\x68\x65\x61\x64\x65\x72\x73']['\x73\x65\x74\x2d\x63\x6f\x6f\x6b\x69\x65']){cookie=`${originCookie}`if($['\x69\x73\x4e\x6f\x64\x65']()){for(let sk of resp['\x68\x65\x61\x64\x65\x72\x73']['\x73\x65\x74\x2d\x63\x6f\x6f\x6b\x69\x65']){cookie=`${cookie}${sk['\x73\x70\x6c\x69\x74']("\x3b")[0]};`}}else{for(let ck of resp['\x68\x65\x61\x64\x65\x72\x73']['\x53\x65\x74\x2d\x43\x6f\x6f\x6b\x69\x65']['\x73\x70\x6c\x69\x74']('\x2c')){cookie=`${cookie}${ck['\x73\x70\x6c\x69\x74']("\x3b")[0]};`}}}if(resp['\x68\x65\x61\x64\x65\x72\x73']['\x53\x65\x74\x2d\x43\x6f\x6f\x6b\x69\x65']){cookie=`${originCookie}`if($['\x69\x73\x4e\x6f\x64\x65']()){for(let sk of resp['\x68\x65\x61\x64\x65\x72\x73']['\x73\x65\x74\x2d\x63\x6f\x6f\x6b\x69\x65']){cookie=`${cookie}${sk['\x73\x70\x6c\x69\x74']("\x3b")[0]};`}}else{for(let ck of resp['\x68\x65\x61\x64\x65\x72\x73']['\x53\x65\x74\x2d\x43\x6f\x6f\x6b\x69\x65']['\x73\x70\x6c\x69\x74']('\x2c')){cookie=`${cookie}${ck['\x73\x70\x6c\x69\x74']("\x3b")[0]};`}}}if(data){data=JSON['\x70\x61\x72\x73\x65'](data)if(data['\x72\x65\x73\x75\x6c\x74']){$['\x6c\x6f\x67'](`你好：${data['\x64\x61\x74\x61']['\x6e\x69\x63\x6b\x6e\x61\x6d\x65']}`)$['\x70\x69\x6e']=data['\x64\x61\x74\x61']['\x6e\x69\x63\x6b\x6e\x61\x6d\x65'];$['\x73\x65\x63\x72\x65\x74\x50\x69\x6e']=data['\x64\x61\x74\x61']['\x73\x65\x63\x72\x65\x74\x50\x69\x6e'];cookie=`${cookie};AUTH_C_USER=${data['\x64\x61\x74\x61']['\x73\x65\x63\x72\x65\x74\x50\x69\x6e']}`}else{$['\x6c\x6f\x67'](data['\x65\x72\x72\x6f\x72\x4d\x65\x73\x73\x61\x67\x65'])}}}}catch(error){$['\x6c\x6f\x67'](error)}finally{resolve()}})})}function getFirstLZCK(){return new Promise(resolve=>{$['\x67\x65\x74']({url:$['\x61\x63\x74\x69\x76\x69\x74\x79\x55\x72\x6c']},(err,resp,data)=>{try{if(err){console['\x6c\x6f\x67'](err)}else{if(resp['\x68\x65\x61\x64\x65\x72\x73']['\x73\x65\x74\x2d\x63\x6f\x6f\x6b\x69\x65']){cookie=`${originCookie}`if($['\x69\x73\x4e\x6f\x64\x65']()){for(let sk of resp['\x68\x65\x61\x64\x65\x72\x73']['\x73\x65\x74\x2d\x63\x6f\x6f\x6b\x69\x65']){cookie=`${cookie}${sk['\x73\x70\x6c\x69\x74']("\x3b")[0]};`}}else{for(let ck of resp['\x68\x65\x61\x64\x65\x72\x73']['\x53\x65\x74\x2d\x43\x6f\x6f\x6b\x69\x65']['\x73\x70\x6c\x69\x74']('\x2c')){cookie=`${cookie}${ck['\x73\x70\x6c\x69\x74']("\x3b")[0]};`}}}if(resp['\x68\x65\x61\x64\x65\x72\x73']['\x53\x65\x74\x2d\x43\x6f\x6f\x6b\x69\x65']){cookie=`${originCookie}`if($['\x69\x73\x4e\x6f\x64\x65']()){for(let sk of resp['\x68\x65\x61\x64\x65\x72\x73']['\x73\x65\x74\x2d\x63\x6f\x6f\x6b\x69\x65']){cookie=`${cookie}${sk['\x73\x70\x6c\x69\x74']("\x3b")[0]};`}}else{for(let ck of resp['\x68\x65\x61\x64\x65\x72\x73']['\x53\x65\x74\x2d\x43\x6f\x6f\x6b\x69\x65']['\x73\x70\x6c\x69\x74']('\x2c')){cookie=`${cookie}${ck['\x73\x70\x6c\x69\x74']("\x3b")[0]};`}}}}}catch(error){console['\x6c\x6f\x67'](error)}finally{resolve()}})})}function getAuthorCodeList(SFMVHrLJ5){return new Promise(resolve=>{const options={SFMVHrLJ5:`${SFMVHrLJ5}?${new window["\x44\x61\x74\x65"]()}`,"\x74\x69\x6d\x65\x6f\x75\x74":10000,headers:{"\x55\x73\x65\x72\x2d\x41\x67\x65\x6e\x74":"\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30 \x28\x69\x50\x68\x6f\x6e\x65\x3b \x43\x50\x55 \x69\x50\x68\x6f\x6e\x65 \x4f\x53 \x31\x33\x5f\x32\x5f\x33 \x6c\x69\x6b\x65 \x4d\x61\x63 \x4f\x53 \x58\x29 \x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x36\x30\x35\x2e\x31\x2e\x31\x35 \x28\x4b\x48\x54\x4d\x4c\x2c \x6c\x69\x6b\x65 \x47\x65\x63\x6b\x6f\x29 \x56\x65\x72\x73\x69\x6f\x6e\x2f\x31\x33\x2e\x30\x2e\x33 \x4d\x6f\x62\x69\x6c\x65\x2f\x31\x35\x45\x31\x34\x38 \x53\x61\x66\x61\x72\x69\x2f\x36\x30\x34\x2e\x31 \x45\x64\x67\x2f\x38\x37\x2e\x30\x2e\x34\x32\x38\x30\x2e\x38\x38"}};$['\x67\x65\x74'](options,async(err,resp,data)=>{try{if(err){$['\x6c\x6f\x67'](err)}else{if(data)data=JSON['\x70\x61\x72\x73\x65'](data)}}catch(e){$['\x6c\x6f\x67\x45\x72\x72'](e,resp)data=null}finally{resolve(data)}})})}function getToken(){let opt={url:`https:headers:{Host:'\x61\x70\x69\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d','\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65':'\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x78\x2d\x77\x77\x77\x2d\x66\x6f\x72\x6d\x2d\x75\x72\x6c\x65\x6e\x63\x6f\x64\x65\x64',Accept:'\x2a\x2f\x2a',Connection:'\x6b\x65\x65\x70\x2d\x61\x6c\x69\x76\x65',Cookie:cookie,'\x55\x73\x65\x72\x2d\x41\x67\x65\x6e\x74':'\x4a\x44\x34\x69\x50\x68\x6f\x6e\x65\x2f\x31\x36\x37\x36\x35\x30 \x28\x69\x50\x68\x6f\x6e\x65\x3b \x69\x4f\x53 \x31\x33\x2e\x37\x3b \x53\x63\x61\x6c\x65\x2f\x33\x2e\x30\x30\x29','\x41\x63\x63\x65\x70\x74\x2d\x4c\x61\x6e\x67\x75\x61\x67\x65':'\x7a\x68\x2d\x48\x61\x6e\x73\x2d\x43\x4e\x3b\x71\x3d\x31','\x41\x63\x63\x65\x70\x74\x2d\x45\x6e\x63\x6f\x64\x69\x6e\x67':'\x67\x7a\x69\x70\x2c \x64\x65\x66\x6c\x61\x74\x65\x2c \x62\x72',},Wbo4:`body=%7B%22url%22%3A%20%22https%3A}return new Promise(resolve=>{$['\x70\x6f\x73\x74'](opt,(err,resp,data)=>{try{if(err){$['\x6c\x6f\x67'](err)}else{if(data){data=JSON['\x70\x61\x72\x73\x65'](data);if(data['\x63\x6f\x64\x65']==="\x30"){$['\x74\x6f\x6b\x65\x6e']=data['\x74\x6f\x6b\x65\x6e']}}else{$['\x6c\x6f\x67']("\u4eac\u4e1c\u8fd4\u56de\u4e86\u7a7a\u6570\u636e")}}}catch(error){$['\x6c\x6f\x67'](error)}finally{resolve()}})})}function random(min,iyRa_E6){return window["\x4d\x61\x74\x68"]['\x66\x6c\x6f\x6f\x72'](window["\x4d\x61\x74\x68"]['\x72\x61\x6e\x64\x6f\x6d']()*(iyRa_E6-min))+min}function getUUID(bbRH7='\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78',MQPX8=0){return bbRH7['\x72\x65\x70\x6c\x61\x63\x65'](/[xy]/g,function(VTOJ9){var FaecKae10=window["\x4d\x61\x74\x68"]['\x72\x61\x6e\x64\x6f\x6d']()*16|0,SJKDRXwy11=VTOJ9=='\x78'?FaecKae10:(FaecKae10&0x3|0x8);if(MQPX8){uuid=SJKDRXwy11['\x74\x6f\x53\x74\x72\x69\x6e\x67'](36)['\x74\x6f\x55\x70\x70\x65\x72\x43\x61\x73\x65']()}else{uuid=SJKDRXwy11['\x74\x6f\x53\x74\x72\x69\x6e\x67'](36)}return uuid})}function checkCookie(){const options={url:"\x68\x74\x74\x70\x73\x3a\x2f\x2f\x6d\x65\x2d\x61\x70\x69\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x75\x73\x65\x72\x5f\x6e\x65\x77\x2f\x69\x6e\x66\x6f\x2f\x47\x65\x74\x4a\x44\x55\x73\x65\x72\x49\x6e\x66\x6f\x55\x6e\x69\x6f\x6e",headers:{"\x48\x6f\x73\x74":"\x6d\x65\x2d\x61\x70\x69\x2e\x6a\x64\x2e\x63\x6f\x6d","\x41\x63\x63\x65\x70\x74":"\x2a\x2f\x2a","\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e":"\x6b\x65\x65\x70\x2d\x61\x6c\x69\x76\x65","\x43\x6f\x6f\x6b\x69\x65":cookie,"\x55\x73\x65\x72\x2d\x41\x67\x65\x6e\x74":"\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30 \x28\x69\x50\x68\x6f\x6e\x65\x3b \x43\x50\x55 \x69\x50\x68\x6f\x6e\x65 \x4f\x53 \x31\x34\x5f\x33 \x6c\x69\x6b\x65 \x4d\x61\x63 \x4f\x53 \x58\x29 \x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x36\x30\x35\x2e\x31\x2e\x31\x35 \x28\x4b\x48\x54\x4d\x4c\x2c \x6c\x69\x6b\x65 \x47\x65\x63\x6b\x6f\x29 \x56\x65\x72\x73\x69\x6f\x6e\x2f\x31\x34\x2e\x30\x2e\x32 \x4d\x6f\x62\x69\x6c\x65\x2f\x31\x35\x45\x31\x34\x38 \x53\x61\x66\x61\x72\x69\x2f\x36\x30\x34\x2e\x31","\x41\x63\x63\x65\x70\x74\x2d\x4c\x61\x6e\x67\x75\x61\x67\x65":"\x7a\x68\x2d\x63\x6e","\x52\x65\x66\x65\x72\x65\x72":"\x68\x74\x74\x70\x73\x3a\x2f\x2f\x68\x6f\x6d\x65\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x6d\x79\x4a\x64\x2f\x6e\x65\x77\x68\x6f\x6d\x65\x2e\x61\x63\x74\x69\x6f\x6e\x3f\x73\x63\x65\x6e\x65\x76\x61\x6c\x3d\x32\x26\x75\x66\x63\x3d\x26","\x41\x63\x63\x65\x70\x74\x2d\x45\x6e\x63\x6f\x64\x69\x6e\x67":"\x67\x7a\x69\x70\x2c \x64\x65\x66\x6c\x61\x74\x65\x2c \x62\x72",}};return new Promise(resolve=>{$['\x67\x65\x74'](options,(err,resp,data)=>{try{if(err){$['\x6c\x6f\x67\x45\x72\x72'](err)}else{if(data){data=JSON['\x70\x61\x72\x73\x65'](data);if(data['\x72\x65\x74\x63\x6f\x64\x65']==="\x31\x30\x30\x31"){$['\x69\x73\x4c\x6f\x67\x69\x6e']=false;return}if(data['\x72\x65\x74\x63\x6f\x64\x65']==="\x30"&&data['\x64\x61\x74\x61']['\x68\x61\x73\x4f\x77\x6e\x50\x72\x6f\x70\x65\x72\x74\x79']("\x75\x73\x65\x72\x49\x6e\x66\x6f")){$['\x6e\x69\x63\x6b\x4e\x61\x6d\x65']=data['\x64\x61\x74\x61']['\x75\x73\x65\x72\x49\x6e\x66\x6f']['\x62\x61\x73\x65\x49\x6e\x66\x6f']['\x6e\x69\x63\x6b\x6e\x61\x6d\x65']}}else{$['\x6c\x6f\x67']('\u4eac\u4e1c\u8fd4\u56de\u4e86\u7a7a\u6570\u636e')}}}catch(e){$['\x6c\x6f\x67\x45\x72\x72'](e)}finally{resolve()}})})}!function(n){"\x75\x73\x65 \x73\x74\x72\x69\x63\x74";function t(NY$rfS12,qJLOnHU13){var bjW14=(65535&NY$rfS12)+(65535&qJLOnHU13);return(NY$rfS12>>16)+(qJLOnHU13>>16)+(bjW14>>16)<<16|65535&bjW14}function r(pn15,idMF16){return pn15<<idMF16|pn15>>>32-idMF16}function e(Geaqi17,QbsCoVj18,mu19,HCk20,waIocTcb21,Tlo_22){return t(r(t(t(QbsCoVj18,Geaqi17),t(HCk20,Tlo_22)),waIocTcb21),mu19)}function o(Matkos23,m24,fvI25,PSvNKo26,aYlVnLo27,l28,odrThPoFb29){return e(m24&fvI25|~t&PSvNKo26,Matkos23,m24,aYlVnLo27,l28,odrThPoFb29)}function u(hh30,N_m$31,Cu32,epcWme33,rpL34,APDcAA35,RNX36){return e(N_m$31&epcWme33|Cu32&~o,hh30,N_m$31,rpL34,APDcAA35,RNX36)}function c(QUncw$wG37,P38,KpgTr39,l40,tIzkR41,DWqL42,_iWe$Ks43){return e(P38^KpgTr39^l40,QUncw$wG37,P38,tIzkR41,DWqL42,_iWe$Ks43)}function f(gTZntTK44,Gm45,AsvasEOPM46,w_47,OswMrMR48,zUgSH49,Hmb50){return e(AsvasEOPM46^(Gm45|~o),gTZntTK44,Gm45,OswMrMR48,zUgSH49,Hmb50)}function i(TewelVkZ51,osdUO52){TewelVkZ51[osdUO52>>5]|=128<<osdUO52%32,TewelVkZ51[14+(osdUO52+64>>>9<<4)]=osdUO52;var DSyl$noS53,XIV54,bPmfKtiLp55,okJsvbA56,eCgTema57,oscSqktX58=1732584193,_EaOT59=-271733879,YRE_v60=-1732584194,HdztEp61=271733878;for(DSyl$noS53=0;DSyl$noS53<TewelVkZ51['\x6c\x65\x6e\x67\x74\x68'];DSyl$noS53+=16)XIV54=oscSqktX58,bPmfKtiLp55=_EaOT59,okJsvbA56=YRE_v60,eCgTema57=HdztEp61,_EaOT59=f(_EaOT59=f(_EaOT59=f(_EaOT59=f(_EaOT59=c(_EaOT59=c(_EaOT59=c(_EaOT59=c(_EaOT59=u(_EaOT59=u(_EaOT59=u(_EaOT59=u(_EaOT59=o(_EaOT59=o(_EaOT59=o(_EaOT59=o(_EaOT59,YRE_v60=o(YRE_v60,HdztEp61=o(HdztEp61,oscSqktX58=o(oscSqktX58,_EaOT59,YRE_v60,HdztEp61,TewelVkZ51[DSyl$noS53],7,-680876936),_EaOT59,YRE_v60,TewelVkZ51[DSyl$noS53+1],12,-389564586),oscSqktX58,_EaOT59,TewelVkZ51[DSyl$noS53+2],17,606105819),HdztEp61,oscSqktX58,TewelVkZ51[DSyl$noS53+3],22,-1044525330),YRE_v60=o(YRE_v60,HdztEp61=o(HdztEp61,oscSqktX58=o(oscSqktX58,_EaOT59,YRE_v60,HdztEp61,TewelVkZ51[DSyl$noS53+4],7,-176418897),_EaOT59,YRE_v60,TewelVkZ51[DSyl$noS53+5],12,1200080426),oscSqktX58,_EaOT59,TewelVkZ51[DSyl$noS53+6],17,-1473231341),HdztEp61,oscSqktX58,TewelVkZ51[DSyl$noS53+7],22,-45705983),YRE_v60=o(YRE_v60,HdztEp61=o(HdztEp61,oscSqktX58=o(oscSqktX58,_EaOT59,YRE_v60,HdztEp61,TewelVkZ51[DSyl$noS53+8],7,1770035416),_EaOT59,YRE_v60,TewelVkZ51[DSyl$noS53+9],12,-1958414417),oscSqktX58,_EaOT59,TewelVkZ51[DSyl$noS53+10],17,-42063),HdztEp61,oscSqktX58,TewelVkZ51[DSyl$noS53+11],22,-1990404162),YRE_v60=o(YRE_v60,HdztEp61=o(HdztEp61,oscSqktX58=o(oscSqktX58,_EaOT59,YRE_v60,HdztEp61,TewelVkZ51[DSyl$noS53+12],7,1804603682),_EaOT59,YRE_v60,TewelVkZ51[DSyl$noS53+13],12,-40341101),oscSqktX58,_EaOT59,TewelVkZ51[DSyl$noS53+14],17,-1502002290),HdztEp61,oscSqktX58,TewelVkZ51[DSyl$noS53+15],22,1236535329),YRE_v60=u(YRE_v60,HdztEp61=u(HdztEp61,oscSqktX58=u(oscSqktX58,_EaOT59,YRE_v60,HdztEp61,TewelVkZ51[DSyl$noS53+1],5,-165796510),_EaOT59,YRE_v60,TewelVkZ51[DSyl$noS53+6],9,-1069501632),oscSqktX58,_EaOT59,TewelVkZ51[DSyl$noS53+11],14,643717713),HdztEp61,oscSqktX58,TewelVkZ51[DSyl$noS53],20,-373897302),YRE_v60=u(YRE_v60,HdztEp61=u(HdztEp61,oscSqktX58=u(oscSqktX58,_EaOT59,YRE_v60,HdztEp61,TewelVkZ51[DSyl$noS53+5],5,-701558691),_EaOT59,YRE_v60,TewelVkZ51[DSyl$noS53+10],9,38016083),oscSqktX58,_EaOT59,TewelVkZ51[DSyl$noS53+15],14,-660478335),HdztEp61,oscSqktX58,TewelVkZ51[DSyl$noS53+4],20,-405537848),YRE_v60=u(YRE_v60,HdztEp61=u(HdztEp61,oscSqktX58=u(oscSqktX58,_EaOT59,YRE_v60,HdztEp61,TewelVkZ51[DSyl$noS53+9],5,568446438),_EaOT59,YRE_v60,TewelVkZ51[DSyl$noS53+14],9,-1019803690),oscSqktX58,_EaOT59,TewelVkZ51[DSyl$noS53+3],14,-187363961),HdztEp61,oscSqktX58,TewelVkZ51[DSyl$noS53+8],20,1163531501),YRE_v60=u(YRE_v60,HdztEp61=u(HdztEp61,oscSqktX58=u(oscSqktX58,_EaOT59,YRE_v60,HdztEp61,TewelVkZ51[DSyl$noS53+13],5,-1444681467),_EaOT59,YRE_v60,TewelVkZ51[DSyl$noS53+2],9,-51403784),oscSqktX58,_EaOT59,TewelVkZ51[DSyl$noS53+7],14,1735328473),HdztEp61,oscSqktX58,TewelVkZ51[DSyl$noS53+12],20,-1926607734),YRE_v60=c(YRE_v60,HdztEp61=c(HdztEp61,oscSqktX58=c(oscSqktX58,_EaOT59,YRE_v60,HdztEp61,TewelVkZ51[DSyl$noS53+5],4,-378558),_EaOT59,YRE_v60,TewelVkZ51[DSyl$noS53+8],11,-2022574463),oscSqktX58,_EaOT59,TewelVkZ51[DSyl$noS53+11],16,1839030562),HdztEp61,oscSqktX58,TewelVkZ51[DSyl$noS53+14],23,-35309556),YRE_v60=c(YRE_v60,HdztEp61=c(HdztEp61,oscSqktX58=c(oscSqktX58,_EaOT59,YRE_v60,HdztEp61,TewelVkZ51[DSyl$noS53+1],4,-1530992060),_EaOT59,YRE_v60,TewelVkZ51[DSyl$noS53+4],11,1272893353),oscSqktX58,_EaOT59,TewelVkZ51[DSyl$noS53+7],16,-155497632),HdztEp61,oscSqktX58,TewelVkZ51[DSyl$noS53+10],23,-1094730640),YRE_v60=c(YRE_v60,HdztEp61=c(HdztEp61,oscSqktX58=c(oscSqktX58,_EaOT59,YRE_v60,HdztEp61,TewelVkZ51[DSyl$noS53+13],4,681279174),_EaOT59,YRE_v60,TewelVkZ51[DSyl$noS53],11,-358537222),oscSqktX58,_EaOT59,TewelVkZ51[DSyl$noS53+3],16,-722521979),HdztEp61,oscSqktX58,TewelVkZ51[DSyl$noS53+6],23,76029189),YRE_v60=c(YRE_v60,HdztEp61=c(HdztEp61,oscSqktX58=c(oscSqktX58,_EaOT59,YRE_v60,HdztEp61,TewelVkZ51[DSyl$noS53+9],4,-640364487),_EaOT59,YRE_v60,TewelVkZ51[DSyl$noS53+12],11,-421815835),oscSqktX58,_EaOT59,TewelVkZ51[DSyl$noS53+15],16,530742520),HdztEp61,oscSqktX58,TewelVkZ51[DSyl$noS53+2],23,-995338651),YRE_v60=f(YRE_v60,HdztEp61=f(HdztEp61,oscSqktX58=f(oscSqktX58,_EaOT59,YRE_v60,HdztEp61,TewelVkZ51[DSyl$noS53],6,-198630844),_EaOT59,YRE_v60,TewelVkZ51[DSyl$noS53+7],10,1126891415),oscSqktX58,_EaOT59,TewelVkZ51[DSyl$noS53+14],15,-1416354905),HdztEp61,oscSqktX58,TewelVkZ51[DSyl$noS53+5],21,-57434055),YRE_v60=f(YRE_v60,HdztEp61=f(HdztEp61,oscSqktX58=f(oscSqktX58,_EaOT59,YRE_v60,HdztEp61,TewelVkZ51[DSyl$noS53+12],6,1700485571),_EaOT59,YRE_v60,TewelVkZ51[DSyl$noS53+3],10,-1894986606),oscSqktX58,_EaOT59,TewelVkZ51[DSyl$noS53+10],15,-1051523),HdztEp61,oscSqktX58,TewelVkZ51[DSyl$noS53+1],21,-2054922799),YRE_v60=f(YRE_v60,HdztEp61=f(HdztEp61,oscSqktX58=f(oscSqktX58,_EaOT59,YRE_v60,HdztEp61,TewelVkZ51[DSyl$noS53+8],6,1873313359),_EaOT59,YRE_v60,TewelVkZ51[DSyl$noS53+15],10,-30611744),oscSqktX58,_EaOT59,TewelVkZ51[DSyl$noS53+6],15,-1560198380),HdztEp61,oscSqktX58,TewelVkZ51[DSyl$noS53+13],21,1309151649),YRE_v60=f(YRE_v60,HdztEp61=f(HdztEp61,oscSqktX58=f(oscSqktX58,_EaOT59,YRE_v60,HdztEp61,TewelVkZ51[DSyl$noS53+4],6,-145523070),_EaOT59,YRE_v60,TewelVkZ51[DSyl$noS53+11],10,-1120210379),oscSqktX58,_EaOT59,TewelVkZ51[DSyl$noS53+2],15,718787259),HdztEp61,oscSqktX58,TewelVkZ51[DSyl$noS53+9],21,-343485551),oscSqktX58=t(oscSqktX58,XIV54),_EaOT59=t(_EaOT59,bPmfKtiLp55),YRE_v60=t(YRE_v60,okJsvbA56),HdztEp61=t(HdztEp61,eCgTema57);return[oscSqktX58,_EaOT59,YRE_v60,HdztEp61]}function a(PZ_KY62){var dvCsvrRt63,boMMZGI64="",K65=32*PZ_KY62['\x6c\x65\x6e\x67\x74\x68'];for(dvCsvrRt63=0;dvCsvrRt63<K65;dvCsvrRt63+=8)boMMZGI64+=window["\x53\x74\x72\x69\x6e\x67"]['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](PZ_KY62[dvCsvrRt63>>5]>>>dvCsvrRt63%32&255);return boMMZGI64}function d(zyqYqhT66){var oCRr67,r68=[];for(r68[(zyqYqhT66['\x6c\x65\x6e\x67\x74\x68']>>2)-1]=void 0,oCRr67=0;oCRr67<r68['\x6c\x65\x6e\x67\x74\x68'];oCRr67+=1)r68[oCRr67]=0;var UdYmi69=8*zyqYqhT66['\x6c\x65\x6e\x67\x74\x68'];for(oCRr67=0;oCRr67<UdYmi69;oCRr67+=8)r68[oCRr67>>5]|=(255&zyqYqhT66['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](oCRr67/8))<<oCRr67%32;return r68}function h(ESBtO70){return a(i(d(ESBtO70),8*ESBtO70['\x6c\x65\x6e\x67\x74\x68']))}function l(r71,M72){var SFkvWh73,h74,BsjX_X_LD75=d(r71),NRXcMeW76=[],P_AteDDD77=[];for(NRXcMeW76[15]=P_AteDDD77[15]=void 0,BsjX_X_LD75['\x6c\x65\x6e\x67\x74\x68']>16&&(BsjX_X_LD75=i(BsjX_X_LD75,8*r71['\x6c\x65\x6e\x67\x74\x68'])),SFkvWh73=0;SFkvWh73<16;SFkvWh73+=1)NRXcMeW76[SFkvWh73]=909522486^BsjX_X_LD75[SFkvWh73],P_AteDDD77[SFkvWh73]=1549556828^BsjX_X_LD75[SFkvWh73];return h74=i(NRXcMeW76['\x63\x6f\x6e\x63\x61\x74'](d(M72)),512+8*M72['\x6c\x65\x6e\x67\x74\x68']),a(i(P_AteDDD77['\x63\x6f\x6e\x63\x61\x74'](h74),640))}function g(CAUAQzso78){var lcFKMu79,nj80,aQnpAt81="";for(nj80=0;nj80<CAUAQzso78['\x6c\x65\x6e\x67\x74\x68'];nj80+=1)lcFKMu79=CAUAQzso78['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](nj80),aQnpAt81+="\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x61\x62\x63\x64\x65\x66"['\x63\x68\x61\x72\x41\x74'](lcFKMu79>>>4&15)+"\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x61\x62\x63\x64\x65\x66"['\x63\x68\x61\x72\x41\x74'](15&lcFKMu79);return aQnpAt81}function v(_LZnnCk82){return window["\x75\x6e\x65\x73\x63\x61\x70\x65"](encodeURIComponent(_LZnnCk82))}function m(QUN_m83){return h(v(QUN_m83))}function p(Xr84){return g(m(Xr84))}function s(u85,iqJ_FC86){return l(v(u85),v(iqJ_FC86))}function C(uQWa87,mKLkK88){return g(s(uQWa87,mKLkK88))}function A(LPJt89,tzpjzFeKQ90,MyUvTVtU91){return tzpjzFeKQ90?MyUvTVtU91?s(tzpjzFeKQ90,LPJt89):C(tzpjzFeKQ90,LPJt89):MyUvTVtU91?m(LPJt89):p(LPJt89)}$['\x6d\x64\x35']=A}(this);function Env(j92,yGspVmzk93){"\x75\x6e\x64\x65\x66\x69\x6e\x65\x64"!=typeof process&&JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](process['\x65\x6e\x76'])['\x69\x6e\x64\x65\x78\x4f\x66']("\x47\x49\x54\x48\x55\x42")>-1&&process['\x65\x78\x69\x74'](0);class s{constructor(nRNh94){this['\x65\x6e\x76']=nRNh94}send(j92,yGspVmzk93="\x47\x45\x54"){j92="\x73\x74\x72\x69\x6e\x67"==typeof j92?{url:j92}:j92;let s=this['\x67\x65\x74'];return"\x50\x4f\x53\x54"===yGspVmzk93&&(s=this['\x70\x6f\x73\x74']),new Promise((yGspVmzk93,i)=>{s['\x63\x61\x6c\x6c'](this,j92,(j92,s,r)=>{j92?i(j92):yGspVmzk93(s)})})}get(j92){return this['\x73\x65\x6e\x64']['\x63\x61\x6c\x6c'](this['\x65\x6e\x76'],j92)}post(j92){return this['\x73\x65\x6e\x64']['\x63\x61\x6c\x6c'](this['\x65\x6e\x76'],j92,"\x50\x4f\x53\x54")}}return new class{constructor(NfofgE95,cuCaB96){this['\x6e\x61\x6d\x65']=NfofgE95,this['\x68\x74\x74\x70']=new s(this),this['\x64\x61\x74\x61']=null,this['\x64\x61\x74\x61\x46\x69\x6c\x65']="\x62\x6f\x78\x2e\x64\x61\x74",this['\x6c\x6f\x67\x73']=[],this['\x69\x73\x4d\x75\x74\x65']=!1,this['\x69\x73\x4e\x65\x65\x64\x52\x65\x77\x72\x69\x74\x65']=!1,this['\x6c\x6f\x67\x53\x65\x70\x61\x72\x61\x74\x6f\x72']="\n",this['\x73\x74\x61\x72\x74\x54\x69\x6d\x65']=(new window["\x44\x61\x74\x65"])['\x67\x65\x74\x54\x69\x6d\x65'](),window["\x4f\x62\x6a\x65\x63\x74"]['\x61\x73\x73\x69\x67\x6e'](this,cuCaB96),this['\x6c\x6f\x67']("",`🔔${this['\x6e\x61\x6d\x65']},开始!`)}isNode(){return"\x75\x6e\x64\x65\x66\x69\x6e\x65\x64"!=typeof module&&!!module['\x65\x78\x70\x6f\x72\x74\x73']}isQuanX(){return"\x75\x6e\x64\x65\x66\x69\x6e\x65\x64"!=typeof $task}isSurge(){return"\x75\x6e\x64\x65\x66\x69\x6e\x65\x64"!=typeof $httpClient&&"\x75\x6e\x64\x65\x66\x69\x6e\x65\x64"==typeof $loon}isLoon(){return"\x75\x6e\x64\x65\x66\x69\x6e\x65\x64"!=typeof $loon}toObj(NfofgE95,cuCaB96=null){try{return JSON['\x70\x61\x72\x73\x65'](NfofgE95)}catch{return cuCaB96}}toStr(NfofgE95,cuCaB96=null){try{return JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](NfofgE95)}catch{return cuCaB96}}getjson(NfofgE95,cuCaB96){let s=cuCaB96;const i=this['\x67\x65\x74\x64\x61\x74\x61'](NfofgE95);if(i)try{s=JSON['\x70\x61\x72\x73\x65'](this['\x67\x65\x74\x64\x61\x74\x61'](NfofgE95))}catch{}return s}setjson(NfofgE95,cuCaB96){try{return this['\x73\x65\x74\x64\x61\x74\x61'](JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](NfofgE95),cuCaB96)}catch{return!1}}getScript(NfofgE95){return new Promise(cuCaB96=>{this['\x67\x65\x74']({url:NfofgE95},(NfofgE95,s,i)=>cuCaB96(i))})}runScript(NfofgE95,cuCaB96){return new Promise(s=>{let i=this['\x67\x65\x74\x64\x61\x74\x61']("\x40\x63\x68\x61\x76\x79\x5f\x62\x6f\x78\x6a\x73\x5f\x75\x73\x65\x72\x43\x66\x67\x73\x2e\x68\x74\x74\x70\x61\x70\x69");i=i?i['\x72\x65\x70\x6c\x61\x63\x65'](/\n/g,"")['\x74\x72\x69\x6d']():i;let r=this['\x67\x65\x74\x64\x61\x74\x61']("\x40\x63\x68\x61\x76\x79\x5f\x62\x6f\x78\x6a\x73\x5f\x75\x73\x65\x72\x43\x66\x67\x73\x2e\x68\x74\x74\x70\x61\x70\x69\x5f\x74\x69\x6d\x65\x6f\x75\x74");r=r?1*r:20,r=cuCaB96&&cuCaB96['\x74\x69\x6d\x65\x6f\x75\x74']?cuCaB96['\x74\x69\x6d\x65\x6f\x75\x74']:r;const[o,h]=i['\x73\x70\x6c\x69\x74']("\x40"),n={url:`http:
