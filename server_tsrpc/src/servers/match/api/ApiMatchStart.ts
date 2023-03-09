import { ApiCallHttp } from "tsrpc";
import { sm } from "../../../serverMatchEntry";
import { ReqMatchStart, ResMatchStart } from "../../../shared/protocols/match/PtlMatchStart";

/** 加入匹配队列，待匹配 */
export async function ApiMatchStart(call: ApiCallHttp<ReqMatchStart, ResMatchStart>) {
    sm.MatchModel.queue.add(call);
}