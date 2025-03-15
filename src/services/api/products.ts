// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 服务包管理列表 GET /order/manage/service-package */
export async function getProducts(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getOrderManageServicePackageParams,
  options?: { [key: string]: any },
) {
  return request<{
    code: number;
    msg: string;
    data: {
      total: number;
      pageNum: number;
      pageSize: number;
      pages: number;
      list: {
        id: number;
        packageName: string;
        subPeriod: number;
        price: number;
        status: number;
        createdAt: string;
      }[];
    };
  }>('/api/v1/products', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}


/** 编辑店铺 PUT /api/v1/products/:id */
export async function putEditProducts(
  body: {
    id:number;
    /** 服务包名 */
    packageName: string;
    /** 订阅时长，单位：天 */
    subPeriod: number;
    /** 价格（分） */
    price: number;
    /** 是否可见：0否，1是 */
    visiblity: boolean;
    /** 封面 */
    cover: string;
    /** 详情 */
    description: string;
  },
  options?: { [key: string]: any },
) {
  const { id } = body;
  return request<{ code: number; msg: string }>(
    `/api/v1/products/${id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 新建服务包 POST /order/manage/service-package */
export async function postCreateShop(
  body: {
    /** 服务包名 */
    packageName: string;
    /** 订阅时长，单位：天 */
    subPeriod: number;
    /** 价格 */
    price: number;
    /** 是否可见：0否，1是 */
    visiblity: boolean;
    /** 封面 */
    cover: string;
    /** 详情 */
    description: string;
  },
  options?: { [key: string]: any },
) {
  return request<{ code: number; msg: string; data: { id: number } }>(
    '/api/v1/products',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 服务包详情 GET /order/manage/service-package/${param0} */
export async function getShopInfoById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getOrderManageServicePackageIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    code: number;
    msg: string;
    data: {
      id: number;
      packageName: string;
      subPeriod: number;
      price: number;
      visiblity: number;
      cover: string;
      description: string;
      status: number;
      createdAt: string;
      updatedAt: string;
    };
  }>(`/api/v1/products/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除服务包 DELETE /order/manage/service-package/${param0} */
export async function deleteShopById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteOrderManageServicePackageIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResult>(`/api/v1/products/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 服务包状态修改 PATCH /order/manage/service-package/status */
export async function patchOrderManageServicePackageStatus(
  body: {
    /** 服务包id */
    id: number;
    /** 状态：Active,Inactive */
    status: string;
  },
  options?: { [key: string]: any },
) {
  return request<{ code: number; msg: string; data: string }>(
    '/order/manage/service-package/status',
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}
