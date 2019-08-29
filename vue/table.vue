<template>
    <div>
        111
        <Table :columns="columns" :data="data"></Table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tableIndex: -1,
            columns: [
                {
                    title: 'Name',
                    key: 'name',
                    render: this.render
                },
                {
                    title: 'Age',
                    key: 'age'
                },
                {
                    title: 'Address',
                    key: 'address'
                }
            ],
            data: [
                {
                    name: 'John Brown',
                    age: 18,
                    address: 'New York No. 1 Lake Park',
                    date: '2016-10-03'
                },
                {
                    name: 'Jim Green',
                    age: 24,
                    address: 'London No. 1 Lake Park',
                    date: '2016-10-01'
                },
                {
                    name: 'Joe Black',
                    age: 30,
                    address: 'Sydney No. 1 Lake Park',
                    date: '2016-10-02'
                },
                {
                    name: 'Jon Snow',
                    age: 26,
                    address: 'Ottawa No. 2 Lake Park',
                    date: '2016-10-04'
                }
            ]
        }
    },
    methods: {
        render(h, { column, row, index }) {
            const { name = '' } = row
            const { tableIndex, changeIndex, inputChange, inputEnter } = this
            return (
                <div on-click={e => changeIndex(e, index)}>
                    {tableIndex == index ? (
                        <i-input
                            type="text"
                            value={name}
                            on-input={e => inputChange(e, index, row)}
                            onOn-enter={e => inputEnter(index, row)}
                        />
                    ) : (
                        <span>{name}</span>
                    )}
                </div>
            )
        },
        changeIndex(e, index) {
            this.tableIndex = index
            this.$nextTick(() => {
                e.currentTarget.getElementsByTagName('input')[0].focus()
            })
        },
        inputChange(value, index, row) {
            row.name = value
        },
        inputEnter(index, row) {
            this.tableIndex = -1
            this.data.splice(index, 1, row)
        }
    }
}
</script>
