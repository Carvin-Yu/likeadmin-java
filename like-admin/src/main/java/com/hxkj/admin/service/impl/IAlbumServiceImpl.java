package com.hxkj.admin.service.impl;

import com.alibaba.fastjson.JSONArray;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.core.toolkit.Assert;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.github.yulichang.base.MPJBaseServiceImpl;
import com.hxkj.admin.LikeAdminThreadLocal;
import com.hxkj.admin.service.IAlbumService;
import com.hxkj.admin.validate.AlbumParam;
import com.hxkj.admin.validate.PageParam;
import com.hxkj.admin.vo.album.AlbumCateVo;
import com.hxkj.admin.vo.album.AlbumVo;
import com.hxkj.admin.vo.system.SystemMenuVo;
import com.hxkj.common.core.PageResult;
import com.hxkj.common.entity.Album;
import com.hxkj.common.entity.AlbumCate;
import com.hxkj.common.mapper.AlbumCateMapper;
import com.hxkj.common.mapper.AlbumMapper;
import com.hxkj.common.utils.ArrayUtil;
import com.hxkj.common.utils.TimeUtil;
import com.hxkj.common.utils.ToolsUtil;
import com.hxkj.common.utils.UrlUtil;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class IAlbumServiceImpl extends MPJBaseServiceImpl<AlbumMapper, Album> implements IAlbumService {

    @Resource
    AlbumCateMapper albumCateMapper;

    /**
     * 文件列表
     *
     * @author fzr
     * @param pageParam 分页参数
     * @return PageResult<AlbumVo>
     */
    @Override
    public PageResult<AlbumVo> albumList(PageParam pageParam, Map<String, String> params) {
        Integer page  = pageParam.getPageNo();
        Integer limit = pageParam.getPageSize();

        QueryWrapper<Album> queryWrapper = new QueryWrapper<>();
        queryWrapper.select(Album.class, info->
                !info.getColumn().equals("type") &&
                        !info.getColumn().equals("aid") &&
                        !info.getColumn().equals("uid") &&
                        !info.getColumn().equals("is_delete") &&
                        !info.getColumn().equals("delete_time"))
                .eq("is_delete", 0)
                .orderByDesc("id");

        this.setSearch(queryWrapper, params, new String[]{
                "like:keyword:str",
                "=:type:int"
        });

        IPage<Album> iPage = this.page(new Page<>(page, limit), queryWrapper);

        List<AlbumVo> albumVoArrayList = new ArrayList<>();
        for (Album album : iPage.getRecords()) {
            AlbumVo vo = new AlbumVo();
            BeanUtils.copyProperties(album, vo);

            vo.setUri(UrlUtil.toAbsoluteUrl(album.getUri()));
            vo.setSize(ToolsUtil.toStorageUnit(album.getSize()));
            vo.setCreateTime(TimeUtil.timestampToDate(album.getCreateTime()));
            vo.setUpdateTime(TimeUtil.timestampToDate(album.getUpdateTime()));
            albumVoArrayList.add(vo);
        }

        return PageResult.iPageHandle(iPage.getTotal(), iPage.getCurrent(), iPage.getSize(), albumVoArrayList);
    }

    /**
     * 文件重命名
     *
     * @author fzr
     * @param id 文件ID
     * @param name 文件名称
     */
    @Override
    public void albumRename(Integer id, String name) {
        Album album = this.getOne(new QueryWrapper<Album>()
                .select("id", "name")
                .eq("id", id)
                .eq("is_delete", 0));

        Assert.notNull(album, "文件丢失！");

        album.setName(name);
        album.setUpdateTime(System.currentTimeMillis() / 1000);
        this.updateById(album);
    }

    /**
     * 文件移动
     *
     * @author fzr
     * @param id 文件ID
     * @param cid 类目ID
     */
    @Override
    public void albumMove(Integer id, Integer cid) {
        Album album = this.getOne(new QueryWrapper<Album>()
                .select("id", "name")
                .eq("id", id)
                .eq("is_delete", 0)
                .last("limit 1"));

        Assert.notNull(album, "文件丢失！");

        Assert.notNull( albumCateMapper.selectOne(
                new QueryWrapper<AlbumCate>()
                    .eq("id", cid)
                    .eq("is_delete", 0)
                ), "类目已不存在！");

        album.setCid(cid);
        album.setUpdateTime(System.currentTimeMillis() / 1000);
        this.updateById(album);
    }

    /**
     * 文件新增
     *
     * @author fzr
     * @param params 文件信息参数
     */
    @Override
    public Integer albumAdd(Map<String, String> params) {
        Album album = new Album();
        album.setCid(Integer.parseInt(params.getOrDefault("cid", "0")));
        album.setAid(Integer.parseInt(params.getOrDefault("aid", "0")));
        album.setUid(Integer.parseInt(params.getOrDefault("uid", "0")));
        album.setType(Integer.parseInt(params.get("type")));
        album.setName(params.get("name"));
        album.setExt(params.get("ext"));
        album.setUri(params.get("url"));
        album.setSize(Long.parseLong(params.get("size")));
        album.setCreateTime(System.currentTimeMillis() / 1000);
        album.setUpdateTime(System.currentTimeMillis() / 1000);
        this.save(album);
        return album.getId();
    }

    /**
     * 文件删除
     *
     * @author fzr
     * @param id 文件ID
     */
    @Override
    public void albumDel(Integer id) {
        Album album = this.getOne(new QueryWrapper<Album>()
                .select("id", "name")
                .eq("id", id)
                .eq("is_delete", 0)
                .last("limit 1"));

        Assert.notNull(album, "文件丢失！");

        album.setIsDelete(1);
        album.setDeleteTime(System.currentTimeMillis() / 1000);
        this.updateById(album);
    }

    /**
     * 分类列表
     *
     * @param params 搜索参数
     * @return JSONArray
     */
    @Override
    public JSONArray cateList(Map<String, String> params) {
        QueryWrapper<AlbumCate> queryWrapper = new QueryWrapper<>();
        queryWrapper.select(AlbumCate.class, info->
                        !info.getColumn().equals("is_delete") &&
                        !info.getColumn().equals("delete_time"))
                .eq("is_delete", 0)
                .orderByDesc("id");

        long type      = Integer.parseInt(params.getOrDefault("type", "0"));
        String keyword = params.getOrDefault("keyword", "");
        if (type > 0) {
            queryWrapper.eq("type", type);
        }

        if (!keyword.equals("")) {
            queryWrapper.like("name", keyword);
        }

        List<AlbumCate> albumCateList = albumCateMapper.selectList(queryWrapper);

        List<AlbumCateVo> lists = new ArrayList<>();
        for (AlbumCate albumCate : albumCateList) {
            AlbumCateVo vo = new AlbumCateVo();
            BeanUtils.copyProperties(albumCate, vo);

            vo.setCreateTime(TimeUtil.timestampToDate(albumCate.getCreateTime()));
            vo.setUpdateTime(TimeUtil.timestampToDate(albumCate.getUpdateTime()));
        }

        JSONArray jsonArray = JSONArray.parseArray(JSONArray.toJSONString(lists));
        return ArrayUtil.listToTree(jsonArray, "id", "pid", "children");
    }

    /**
     * 分类新增
     *
     * @author fzr
     * @param albumParam 分类参数
     */
    @Override
    public void cateAdd(AlbumParam albumParam) {
        AlbumCate albumCate = new AlbumCate();
        albumCate.setType(albumParam.getType());
        albumCate.setPid(albumParam.getPid());
        albumCate.setName(albumParam.getName());
        albumCate.setCreateTime(System.currentTimeMillis() / 1000);
        albumCate.setUpdateTime(System.currentTimeMillis() / 1000);
        albumCateMapper.insert(albumCate);
    }

    /**
     * 分类重命名
     *
     * @author fzr
     * @param id 分类ID
     * @param name 分类名称
     */
    @Override
    public void cateRename(Integer id, String name) {
        AlbumCate albumCate = albumCateMapper.selectOne(
                new QueryWrapper<AlbumCate>()
                        .select("id", "name")
                        .eq("id", id)
                        .eq("is_delete", 0));

        Assert.notNull(albumCate, "分类已不存在！");

        albumCate.setName(name);
        albumCate.setUpdateTime(System.currentTimeMillis() / 1000);
        albumCateMapper.updateById(albumCate);
    }

    /**
     * 分类删除
     *
     * @author fzr
     * @param id 分类ID
     */
    @Override
    public void cateDel(Integer id) {
        AlbumCate albumCate = albumCateMapper.selectOne(
                new QueryWrapper<AlbumCate>()
                        .select("id", "name")
                        .eq("id", id)
                        .eq("is_delete", 0));

        Assert.notNull(albumCate, "分类已不存在！");

        Assert.isNull(this.getOne(new QueryWrapper<Album>()
                .select("id", "cid", "name")
                .eq("cid", id)
                .eq("is_delete", 0)
                .last("limit 1")
            ), "当前分类正被使用中,不能删除！");

        albumCate.setIsDelete(1);
        albumCate.setDeleteTime(System.currentTimeMillis() / 1000);
        albumCateMapper.updateById(albumCate);
    }

}
