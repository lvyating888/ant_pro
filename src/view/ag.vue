<template>
    <div class="itxst">
        <!-- 使用ag-grid-vue组件 其中columnDefs为列，rowData为表格数据 -->
        <ag-grid-vue
                style="width: 80%; height: 200px;"
                class="table ag-theme-balham"
                :columnDefs="columnDefs"
                :rowData="rowData"
                :enableColResize="true"
                :defaultColDef="defaultColDef"
                :gridReady="onGridReady"
                @cellClicked="onCellClicked"
                @RowClicked="onRowClicked"
        ></ag-grid-vue>
    </div>
</template>
<script>
    function aa() {

    }
    import 'ag-grid-community/dist/styles/ag-grid.css';
    import 'ag-grid-community/dist/styles/ag-theme-balham.css';
    //引入ag-grid-vue
    import { AgGridVue } from 'ag-grid-vue3';
    export default {
        //注册draggable组件
        components: {
            AgGridVue
        },
        data() {
            return {
                //定义ag-grid列
                columnDefs: [
                    {headerName: '名称', field: 'title', checkboxSelection: true},
                    {headerName: '网址', field: 'url', width: 200},
                    {headerName: '分类', field: 'catalog'},
                    {headerName: 'PR', field: 'pr'},
                    {headerName: '操作', 'pinned': 'right',cellRenderer: function (params){
                            console.log(params);
                            console.log(1231232321);
                            var html=`<button class="btn btn-xs btn-primary" >page2</button>`;
                            return html;
                        }}
                ],
                //属性,
                defaultColDef: {
                    resizable: true,//是否可以调整列大小，就是拖动改变列大小
                },
                //需要显示的数据
                rowData: [
                    {title: '谷歌', url: 'www.google', catalog: '搜索引擎',pr:10},
                    {title: '微软', url: 'www.microsoft.com', catalog: '操作系',pr:10},
                    {title: 'ITXST', url: 'www.itxst.com', catalog: '小站',pr:1},
                    {title: '淘宝', url: 'www.taobao.com', catalog: '电商',pr:8}
                ]
            };
        },
        methods: {
            //ag-grid创建完成后执行的事件
            onGridReady (params) {
                console.log(params);
                // 获取gridApi
                this.gridApi = params.api;
                this.columnApi = params.columnApi;
                // 这时就可以通过gridApi调用ag-grid的传统方法了
                this.gridApi.sizeColumnsToFit();
            },
            /*行点击事件*/
            onRowClicked(event) {

                //event.data 选中的行内数据，event.event 为鼠标事件，等其他。可以log自己看一下
                var itxst = event.data;
                console.log('我进来了了=======');
            },
            //单元格点击事件
            onCellClicked (cell) {
                console.log(cell);
                // 获取选中单元格的数据
                console.log(cell.value);
                // 获取选中单元格所在行号
                console.log(cell.rowIndex);
                // 获取选中单元格所在行的数据
                console.log(cell.data);
            },
            aa(){
                console.log(1231232321321)
            }
        }
    };
</script>
<style scoped>
    .itxst {
        margin: 10px;
        text-align: left;
    }
</style>