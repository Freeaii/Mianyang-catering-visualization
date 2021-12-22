function MainData() {
    $.getJSON("json/Store.json",function (Aggregate) {
        let merge = []
        let data = []
        let latitude = []
        let longitude = []
        for (var i = 0; i < Aggregate.length; i++) {
            latitude.push(Number(Aggregate[i]['latitude']))
            longitude.push(Number(Aggregate[i]['longitude']))
            data.push({
                name: Aggregate[i]['name'],
                value: Number(Aggregate[i]['avgPrice'])
            })
            merge.push({
                name: Aggregate[i]['name'],
                local: [longitude[i], latitude[i]]
            })
        }
    })
};