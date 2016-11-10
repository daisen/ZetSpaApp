<template>
    <div class="content">
        <div class="container-fluid">
            <div class="row">

                <div class="col-lg-8 col-md-7">
                    <div class="card">
                        <div class="header">
                            <h4 class="title">编辑信息</h4>
                        </div>
                        <div class="content">
                            <form>
                                <div class="row">
                                    <div class="col-md-5">
                                        <div class="form-group">
                                            <label>员工编号</label>
                                            <input type="text" class="form-control border-input" disabled placeholder="员工编号" value="8888888">
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label>姓名</label>
                                            <input type="text" class="form-control border-input" placeholder="姓名" value="金三胖">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">手机号</label>
                                            <input type="email" class="form-control border-input" placeholder="13888888888">
                                        </div>
                                    </div>
                                </div> 
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>省份</label>
                                            <input type="text" class="form-control border-input" placeholder="City" value="山东">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>市</label>
                                            <input type="text" class="form-control border-input" placeholder="Country" value="青岛">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>区</label>
                                            <input type="text" class="form-control border-input" placeholder="" value="崂山区">
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label>详细地址</label>
                                            <input type="text" class="form-control border-input" placeholder="" value="银河系土旮旯星">
                                        </div>
                                    </div>
                                </div>



                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label>备注</label>
                                            <textarea rows="5" class="form-control border-input" placeholder="" value="Mike">
                                                很抱歉，没有找到与“金三胖”相关的网页。
                                            </textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center">
                                    <button type="submit" class="btn btn-info btn-fill btn-wd">更  新</button>
                                </div>
                                <div class="clearfix"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {};
</script>