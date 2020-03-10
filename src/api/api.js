import {
  wxRequest
} from '@/utils/wxRequest';

let env = "-test" //-dev 或者 -test
//const apiMall = 'https://sujiefs.com/'
 const apiMall = 'http://book.umaske.com'

/**
 * 获取发现好商品接口
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
const getDiscoverList = (params) => wxRequest(params, apiMall + '/goods/list?cateidOne=1&cateidTwo=0&price=0&sales=2');

//微信的jscode换取sessionKey
const wxJsCode2Session = (params) => wxRequest(params, apiMall + "/v1/wechat/jscode2session");
const user2session = (params) => wxRequest(params, apiMall + "/v1/wechat/user2session?jsoncallback=?");

//商品接口---begin
//首页发现商品接口
const hostGoodsList = (params) => wxRequest(params, apiMall + '/v1/home/hostGoodsList');
const getHomeDisvocerList = (params) => wxRequest(params, apiMall + '/v1/goods/discoverlist');
//查询商品列表
const getGoodsList = (params) => wxRequest(params, apiMall + '/v1/mall/searchGoodsList');

//查询商品详情信息
const goodsDetail = (params) => wxRequest(params, apiMall + '/v1/goods/detail');
//商品加入购物车
const addCart = (params) => wxRequest(params, apiMall + '/v1/cart/add');
//用户的购物车商品列表
const cartList = (params) => wxRequest(params, apiMall + '/v1/cart/list');
//购物车的商品选中状态
const cartCheck = (params) => wxRequest(params, apiMall + '/v1/cart/check');
//购物车的商品选中状态(全选)
const cartCheckAll = (params) => wxRequest(params, apiMall + '/v1/cart/checkAll');
//购物车的商品删除
const cartDel = (params) => wxRequest(params, apiMall + '/v1/cart/del');
//购物车的商品数量更新
const cartUpdateNum = (params) => wxRequest(params, apiMall + '/v1/cart/updateNum');
//直接购买商品
const addOrder = (params) => wxRequest(params, apiMall + '/v1/order/add');

const preOrder = (params) => wxRequest(params, apiMall + '/v1/order/preOrder');

//支付前生成订单
const saveOrder = (params) => wxRequest(params, apiMall + '/v1/order/saveOrder');

//支付统一下单
const toPay = (params) => wxRequest(params, apiMall + '/wepay/toPay');

//商品收藏
const goodsFavorite = (params) => wxRequest(params, apiMall + '/v1/mall/goodsFavorite/add');

//商品收藏删除
const goodsUnFavorite = (params) => wxRequest(params, apiMall + '/v1/mall/goodsFavorite/delete');

//商品是否已收藏
const goodsIsFavorite = (params) => wxRequest(params, apiMall + '/v1/mall/goodsFavorite/goodsIsFavorite');

//商品接口---end

//用户相关信息--begin
//用户的当天签到信息
const userSginInfo = (params) => wxRequest(params, apiMall + '/v1/userSign/signInfo');
const doSign = (params) => wxRequest(params, apiMall + '/v1/userSign/doSign');
//获取最近七天签到情况
const getSignDate = (params) => wxRequest(params, apiMall + '/v1/userSign/getSignDate');

//用户积分信息
const pointInfo = (params) => wxRequest(params, apiMall + '/v1/userPoint/pointInfo');

//用户足迹信息
const browseInfo = (params) => wxRequest(params, apiMall + '/v1/userBrowse/browseInfo');
//添加用户足迹
const addBrowser = (params) => wxRequest(params, apiMall + '/v1/userBrowse/add');
//添加用户足迹
const delUserBrowser = (params) => wxRequest(params, apiMall + '/v1/userBrowse/delete');

//用户收藏的商品
const favoriteInfo = (params) => wxRequest(params, apiMall + '/v1/goodsFavorite/favoriteInfo');

//用户消息
const messageInfo = (params) => wxRequest(params, apiMall + '/v1/systemMessage/messageInfo');

//用户手机绑定
const registerUser = (params) => wxRequest(params, apiMall + '/v1/userCenter/register');
//发送短信
const sendRandCode = (params) => wxRequest(params, apiMall + '/v1/sms/send');

//用户是否绑定手机号
const getUserInfo = (params) => wxRequest(params, apiMall + '/v1/userCenter/getUserInfo');

//用户收货地址
const getUserAddress = (params) => wxRequest(params, apiMall + '/v1/receiverInfo/list');

//保存用户收货地址
const saveAddress = (params) => wxRequest(params, apiMall + '/v1/receiverInfo/saveOrUpdate');

//用户收货地址根据id查询
const receiverInfoById = (params) => wxRequest(params, apiMall + '/v1/receiverInfo/receiverInfoById');

//根据Id删除收货地址
const delUserAddress = (params) => wxRequest(params, apiMall + '/v1/receiverInfo/operation');

//查询关键字保存
const addSearchKeyword = (params) => wxRequest(params, apiMall + '/v1/searchkeyword/add');
//查询关键字列表
const searchKeywordList = (params) => wxRequest(params, apiMall + '/v1/searchkeyword/list');
//查询关键字清除
const clearSearchKeyword = (params) => wxRequest(params, apiMall + '/v1/searchkeyword/clear');

//查询我的订单
const getMyOrderList = (params) => wxRequest(params, apiMall + '/v1/mall/goodsOrder/getMyOrderList');

//查询我的订单数量
const getMyOrderSize = (params) => wxRequest(params, apiMall + '/v1/mall/goodsOrder/getMyOrderSize');

//根据订单号查询详情
const getOrderInfo = (params) => wxRequest(params, apiMall + '/v1/mall/goodsOrder/getOrderDetail');

//根据订单号查询详情
const getPayOrderDetail = (params) => wxRequest(params, apiMall + '/v1/mall/goodsOrder/getPayOrderDetail');

//根据订单号查询详情
const editOrderInfo = (params) => wxRequest(params, apiMall + '/v1/mall/goodsOrder/opt');

//根据订单号查询物流
const orderExpressInfo = (params) => wxRequest(params, apiMall + '/v1/orderExpress/orderExpressInfo');

//查询用户的已订购产品
const goodsUserOrderList = (params) => wxRequest(params, apiMall + '/v1/mall/goodsOrder/goodsUserOrderList');

//退货操作
const refundApply = (params) => wxRequest(params, apiMall + '/v1/mall/refund/saveRefundApply');

//用户相关信息--end

//商品分类--begin
//一级分类
const rootCtegoryList = (params) => wxRequest(params, apiMall + '/v1/mall/rootCtegoryList');
//二级三级分类
const childGoodsCatetoryList = (params) => wxRequest(params, apiMall + '/v1/mall/childGoodsCatetoryList');
//商品分类--end

//查询广告列表
const getAdList = (params) => wxRequest(params, apiMall + '/v1/adv/list');

export default {
  hostGoodsList,
  getDiscoverList,
  getHomeDisvocerList,
  getGoodsList,
  goodsDetail,
  wxJsCode2Session,
  user2session,
  userSginInfo,
  doSign,
  addCart,
  cartList,
  cartCheck,
  cartCheckAll,
  cartDel,
  cartUpdateNum,
  preOrder,
  refundApply,
  pointInfo,
  browseInfo,
  addBrowser,
  delUserBrowser,
  favoriteInfo,
  messageInfo,
  registerUser,
  sendRandCode,
  getUserInfo,
  getUserAddress,
  saveAddress,
  receiverInfoById,
  getUserAddress,
  addSearchKeyword,
  searchKeywordList,
  clearSearchKeyword,
  getMyOrderList,
  saveOrder,
  toPay,
  rootCtegoryList,
  childGoodsCatetoryList,
  getOrderInfo,
  editOrderInfo,
  goodsUserOrderList,
  orderExpressInfo,
  delUserAddress,
  goodsFavorite,
  goodsUnFavorite,
  goodsIsFavorite,
  getMyOrderSize,
  getPayOrderDetail,
  getAdList,
  getSignDate
}
