import * as dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/zh-cn";

// 配置使用处理相对时间的插件
dayjs.extend(relativeTime);
// 配置使用中文语言包
dayjs.locale("zh-cn");

const formatDate = (time) => dayjs(time).fromNow()

export default formatDate