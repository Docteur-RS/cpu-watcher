main.fCpu = Backbone.View.extend({
    el: '',
    initialize: function () {
        this.active = false;
        this.card;
        this.container = null;
    },
    initCpuUi: function ()
    {
        this.card = main.cardMngr.addNewCard(true);
        var template = main.cardMngr.getTemplate("memoryMngr", "cpuUi");
        this.card.append(template());
        $("#cpu-start").on("click", (this.start).bind(this));
        $("#cpu-stop").on("click", (this.stop).bind(this));
    },
    start: function ()
    {
        this.active = true;
        this.getCpuUsage();
    },
    stop: function ()
    {
        this.active = false;
    },
    showCpuUsage: function (cpu)
    {
//        console.log("fake = ", Math.round(cpu * 100), "real = ", cpu * 100);
        var cpu = Math.round(cpu * 100);
        var template = main.cardMngr.getTemplate("memoryMngr", "cpuValue");
        var templateFilled = template({cpuValue: cpu + ""});
        if (this.container === null)
        {
            this.container = this.card.find("#cpu-value-container");
            this.container.append(templateFilled);
        } else
        {
            this.container.empty();
            this.container.append(templateFilled);
        }

        console.log("cpu = ", cpu);
        this.getCpuUsage();
    },
    getCpuUsage: function ()
    {
        if (this.active === false)
            return;
        main.modules.memoryMngr.backEnd.bCpu.getCpuValue((this.showCpuUsage).bind(this));
    }
});