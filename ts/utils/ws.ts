var f = {
    connectToEventSource(url, initfunc) {


        var wasOpen = !!this.eventSource
        if (wasOpen)
            this.eventSource.close()
        this.eventSource = new WebSocket(appUrl(url).replace("https", "wss").replace("http", "ws"))

        this.eventSource.onopen = (event) => {
            initfunc()
        }.bind(this)

        this.eventSource.onclose = (event) => {
            m.redraw()

        }
        this.eventSource.onerror = (error) => {
            m.redraw()
        }
        this.eventSource.onmessage = (event) => {
            onmessage(event)
        }.bind(this)

        this.eventSource.onerror = (error) => {
            m.redraw()
        }
    }
}