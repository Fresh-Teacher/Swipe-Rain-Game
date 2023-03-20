(function(cjs, an) {

    var p; // shortcut to reference prototypes
    var lib = {};
    var ss = {};
    var img = {};
    lib.ssMetadata = [{
        name: "07_movertouch_maceta_atlas_P_",
        frames: [
            [0, 0, 730, 367],
            [732, 199, 18, 36],
            [732, 0, 80, 112],
            [732, 114, 79, 83]
        ]
    }];


    // symbols:



    (lib.fondoverdemapadebits = function() {
        this.spriteSheet = ss["07_movertouch_maceta_atlas_P_"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.Mapadebits1 = function() {
        this.spriteSheet = ss["07_movertouch_maceta_atlas_P_"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.Mapadebits5 = function() {
        this.spriteSheet = ss["07_movertouch_maceta_atlas_P_"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.Mapadebits6 = function() {
        this.spriteSheet = ss["07_movertouch_maceta_atlas_P_"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();
    // helper functions:

    function mc_symbol_clone() {
        var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
        clone.gotoAndStop(this.currentFrame);
        clone.paused = this.paused;
        clone.framerate = this.framerate;
        return clone;
    }

    function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
        var prototype = cjs.extend(symbol, cjs.MovieClip);
        prototype.clone = mc_symbol_clone;
        prototype.nominalBounds = nominalBounds;
        prototype.frameBounds = frameBounds;
        return prototype;
    }


    (lib.welldone = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Capa 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#CC3300").s().p("AmeFEQgIgDgDgIIgBgHIAAgFIAQiKQADgcAWgHQAKgDAKAEQAJAEAHALIBQBxIAFAHIABAGQADAJgEAGQgEAHgKACQgHACgHgDQgHgEgFgJIgKgPIhEATIgBATQAAAJgEAGIgEAGIgGACIgHABQgFAAgFgDgAl7D0IAsgMIgmg2gAi7EJQgRgCgQgKQgQgKgKgPQgLgPgFgUQgGgVACgTQABgSAJgQQAJgRAOgLQAOgKATgFQALgDALgBQAKAAAKACQASAFAEAMQACAJgDAHQgDAHgHADQgDABgFgBIgKgBQgFgCgGAAQgHAAgGACQgKACgIAGQgHAGgFAJQgEAJgBALQAAAKADAMQADAMAGAJQAFAIAJAGQAIAGAKABQAJACALgDQAJgCAGgFQAGgEAEgGIAEgNQACgGgBgFIgjAJQgJADgHgEQgGgEgDgJQgCgIAEgHQADgGAKgCIA1gPQANgDAGAFQAGAFAEAMQAFAUgCAQQgCARgIAOQgQAdghAJQgNAEgNAAIgMgBgAgvDiQgHgEgDgIIgBgHIAAgFIAPiJQADgdAWgGQALgDAIAEQAJAEAIALIBQBxIAEAHIACAFQACAJgEAGQgEAHgJADQgIACgGgEQgHgEgGgIIgJgPIhEASIAAATQgBAKgEAGIgEAFIgGADIgGABQgGAAgFgDgAgMCSIArgMIgkg2gACJCtQgHgEgEgNIgih+QgEgPAEgIQAEgHAJgCQAJgCAHAEQAHADAEANIAjCBQADANgEAHQgEAIgJACIgHABQgFAAgEgDgADWCYQgHgEgEgNIgkiHQgCgIADgHQAEgGAKgDQAGgBAHACQAGABAHAGIBWBIIgXhMQgDgNAEgHQAEgIAJgCQAJgDAHAFQAHAEAEANIAkCGQACAJgEAHQgDAHgKACQgGACgHgCQgHgCgGgGIhVhIIAWBMQADANgEAHQgEAIgJACIgHABQgFAAgEgDgAGKBrQgIgFgDgJQgCgKAFgHQAEgIAJgDQAJgCAIAFQAIAEADAJQACAKgFAIQgEAIgJACIgGABQgGAAgFgDgAF8A1QgHgEgEgNIgVhPQgDgNADgHQAEgIAKgCQAIgDAIAFQAHAEAEANIAVBPQADANgEAHQgEAIgIACIgIABQgFAAgEgDgAljAAQgHgDgDgNIgliIQgDgLAEgEQAFgFAJgCIAhgJQAWgGARADQARAEALALQALAMAFASQAIAdgMAUQgNAUghAKIgNADIAJAgQADANgEAHQgEAHgJACIgGABQgFAAgFgDgAlYiUIgNADIAOAxIAMgDQAOgEAFgHQAFgIgDgMQgDgMgJgFQgFgDgGAAQgFAAgGACgAjOgkQgGgCgCgLIgkiIQgEgNAEgHQAEgHAJgDQAJgCAHAEQAHAEAEANIAfB0IAsgMQAJgCAHADQAGADADAJQACAKgEAGQgEAGgJADIhBARQgHADgEAAIgFgCgAhShFQgIgDgDgIIgBgHIAAgFIAQiKQADgdAWgGQAKgDAKAEQAJAEAHALIBPBxIAFAHIABAGQADAIgEAHQgEAHgKACQgHACgHgDQgHgEgFgJIgKgPIhDATIgBATQAAAJgEAGIgEAGIgGACIgHABQgFAAgFgDgAgviVIAsgMIgmg2gACTiGQgHgEgEgMIgKgnIhIhCQgKgIgBgJQgCgIAGgHQAGgIAIgBQAIAAALAIIA3A1IAWhKQAFgMAIgEQAIgDAIADQAIAEAEAIQADAIgFAMIgeBdIALAnQADANgEAHQgEAHgJADIgGABQgFAAgFgEg");
        this.shape.setTransform(60.4, 47.6);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#CC3300").s().p("Aheh5IC9B5Ii9B6g");
        this.shape_1.setTransform(63.7, 87.9);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FFCC00").s().p("Aj/G9Qi5hrg3jNQg3jMBqi5QBri4DNg3QDNg3C4BqQC4BrA4DNQA2DNhqC4QhqC4jOA3QhGAThDAAQiDAAh4hGg");
        this.shape_2.setTransform(58.9, 58.9);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#CC3300").s().p("AklH9QjTh6g/jrQg/jqB6jTQB6jTDrg/QDqg/DSB6QDTB6A/DrQA/Dqh5DTQh6DSjrA/QhQAWhNAAQiVAAiLhQg");
        this.shape_3.setTransform(58.9, 58.9);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#333333").s().p("AmeFEQgIgDgDgIIgBgHIAAgFIAQiKQADgcAWgHQAKgDAKAEQAJAEAHALIBQBxIAFAHIABAGQADAJgEAGQgEAHgKACQgHACgHgDQgHgEgFgJIgKgPIhEATIgBATQAAAJgEAGIgEAGIgGACIgHABQgFAAgFgDgAl7D0IAsgMIgmg2gAi7EJQgRgCgQgKQgQgKgKgPQgLgPgFgUQgGgVACgTQABgSAJgQQAJgRAOgLQAOgKATgFQALgDALgBQAKAAAKACQASAFAEAMQACAJgDAHQgDAHgHADQgDABgFgBIgKgBQgFgCgGAAQgHAAgGACQgKACgIAGQgHAGgFAJQgEAJgBALQAAAKADAMQADAMAGAJQAFAIAJAGQAIAGAKABQAJACALgDQAJgCAGgFQAGgEAEgGIAEgNQACgGgBgFIgjAJQgJADgHgEQgGgEgDgJQgCgIAEgHQADgGAKgCIA1gPQANgDAGAFQAGAFAEAMQAFAUgCAQQgCARgIAOQgQAdghAJQgNAEgNAAIgMgBgAgvDiQgHgEgDgIIgBgHIAAgFIAPiJQADgdAWgGQALgDAIAEQAJAEAIALIBQBxIAEAHIACAFQACAJgEAGQgEAHgJADQgIACgGgEQgHgEgGgIIgJgPIhEASIAAATQgBAKgEAGIgEAFIgGADIgGABQgGAAgFgDgAgMCSIArgMIgkg2gACJCtQgHgEgEgNIgih+QgEgPAEgIQAEgHAJgCQAJgCAHAEQAHADAEANIAjCBQADANgEAHQgEAIgJACIgHABQgFAAgEgDgADWCYQgHgEgEgNIgkiHQgCgIADgHQAEgGAKgDQAGgBAHACQAGABAHAGIBWBIIgXhMQgDgNAEgHQAEgIAJgCQAJgDAHAFQAHAEAEANIAkCGQACAJgEAHQgDAHgKACQgGACgHgCQgHgCgGgGIhVhIIAWBMQADANgEAHQgEAIgJACIgHABQgFAAgEgDgAGKBrQgIgFgDgJQgCgKAFgHQAEgIAJgDQAJgCAIAFQAIAEADAJQACAKgFAIQgEAIgJACIgGABQgGAAgFgDgAF8A1QgHgEgEgNIgVhPQgDgNADgHQAEgIAKgCQAIgDAIAFQAHAEAEANIAVBPQADANgEAHQgEAIgIACIgIABQgFAAgEgDgAljAAQgHgDgDgNIgliIQgDgLAEgEQAFgFAJgCIAhgJQAWgGARADQARAEALALQALAMAFASQAIAdgMAUQgNAUghAKIgNADIAJAgQADANgEAHQgEAHgJACIgGABQgFAAgFgDgAlYiUIgNADIAOAxIAMgDQAOgEAFgHQAFgIgDgMQgDgMgJgFQgFgDgGAAQgFAAgGACgAjOgkQgGgCgCgLIgkiIQgEgNAEgHQAEgHAJgDQAJgCAHAEQAHAEAEANIAfB0IAsgMQAJgCAHADQAGADADAJQACAKgEAGQgEAGgJADIhBARQgHADgEAAIgFgCgAhShFQgIgDgDgIIgBgHIAAgFIAQiKQADgdAWgGQAKgDAKAEQAJAEAHALIBPBxIAFAHIABAGQADAIgEAHQgEAHgKACQgHACgHgDQgHgEgFgJIgKgPIhDATIgBATQAAAJgEAGIgEAGIgGACIgHABQgFAAgFgDgAgviVIAsgMIgmg2gACTiGQgHgEgEgMIgKgnIhIhCQgKgIgBgJQgCgIAGgHQAGgIAIgBQAIAAALAIIA3A1IAWhKQAFgMAIgEQAIgDAIADQAIAEAEAIQADAIgFAMIgeBdIALAnQADANgEAHQgEAHgJADIgGABQgFAAgFgEg");
        this.shape_4.setTransform(60.4, 47.6);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#CC3300").s().p("Eg4oAZWMAAAgyrMBxRAAAMAAAAyrg");
        this.shape_5.setTransform(199.6, 10.7);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape_4
            }]
        }, 1).to({
            state: [{
                t: this.shape_5
            }]
        }, 2).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 117.8, 117.8);


    (lib.tablerouniversal = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            cero: 0,
            veinte: 21
        });

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }
        this.frame_1 = function() {
            this.stop();
        }
        this.frame_2 = function() {
            this.stop();
        }
        this.frame_3 = function() {
            this.stop();
        }
        this.frame_4 = function() {
            this.stop();
        }
        this.frame_5 = function() {
            this.stop();
        }
        this.frame_6 = function() {
            this.stop();
        }
        this.frame_7 = function() {
            this.stop();
        }
        this.frame_8 = function() {
            this.stop();
        }
        this.frame_9 = function() {
            this.stop();
        }
        this.frame_10 = function() {
            this.stop();
        }
        this.frame_11 = function() {
            this.stop();
        }
        this.frame_12 = function() {
            this.stop();
        }
        this.frame_13 = function() {
            this.stop();
        }
        this.frame_14 = function() {
            this.stop();
        }
        this.frame_15 = function() {
            this.stop();
        }
        this.frame_16 = function() {
            this.stop();
        }
        this.frame_17 = function() {
            this.stop();
        }
        this.frame_18 = function() {
            this.stop();
        }
        this.frame_19 = function() {
            this.stop();
        }
        this.frame_21 = function() {
            this.stop();
            //PONGO UN FOTOGRAMA MAS PORQUE SINO QUEDA EN FOTOGRAMA
            //20 Y EJECUTA LA FUNCION DE SACAR EL MOUSE ETERNAMENTE.
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(1).call(this.frame_13).wait(1).call(this.frame_14).wait(1).call(this.frame_15).wait(1).call(this.frame_16).wait(1).call(this.frame_17).wait(1).call(this.frame_18).wait(1).call(this.frame_19).wait(2).call(this.frame_21).wait(1));

        // numeros
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("Ag5BLQgVgdAAguQAAgvAWgbQAVgcAkAAQAlAAAUAdQAVAdAAAtQAAAvgWAcQgVAbgkAAQgjAAgWgcgAgPgtQgEAQgBAbQABAkAEAOQAFANAKAAQANgBAEgQQAEgQAAgcQAAgkgGgMQgFgMgKAAQgKAAgFAPg");
        this.shape.setTransform(-1.8, -3.3);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("AhMBmIAAgtIAxAAIAAheQgbANgRABIAAgtQArgJAQgYIAqAAIAACeIAvAAIAAAtg");
        this.shape_1.setTransform(-1, -3.5);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FFFFFF").s().p("AhMBmIAAguIAigZIAcgVQATgRAGgIQAHgKAAgJQAAgKgGgGQgFgFgIgBQgWAAgDAjIgygKQAFgjAWgRQAWgSAdAAQAhAAAVASQAUARAAAdQAAAUgLARQgLARg2AjIBNAAIgCAyg");
        this.shape_2.setTransform(-2, -3.5);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FFFFFF").s().p("AhRAnIA0gGQAFAbAYAAQAKAAAHgGQAHgGAAgJQAAgGgEgGQgDgEgFgCQgEgDgJAAIgZAAIAAgoIAVAAQAPAAAFgGQAFgGAAgGQAAgIgGgGQgGgEgJAAQgUAAgFAWIgwgIQAHgcAVgPQAVgPAcAAQAhAAAUAQQAUAPAAAZQAAAQgIALQgJALgNAFQAkAJAAAkQAAAegWAQQgWAPgiAAQhFAAgQhAg");
        this.shape_3.setTransform(-2, -3.3);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AAABmIAAgsIhRAAIAAgsIBLhzIA9AAIAABzIAcAAIAAAsIgcAAIAAAsgAgmAOIAmAAIAAg6g");
        this.shape_4.setTransform(-1.6, -3.5);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#FFFFFF").s().p("Ag0BVQgXgQgFgdIAzgGQAGAWAWgBQALABAHgIQAGgGAAgLQAAgLgHgHQgHgGgKAAQgPAAgIANIgugHIAJhxICEAAIgFAxIhTAAIgDAcQARgLASAAQAbAAATASQAUAQAAAeQAAAggXAUQgWATgkAAQgdABgXgRg");
        this.shape_5.setTransform(-1.8, -3.2);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#FFFFFF").s().p("AgoBbQgTgMgKgXQgKgYAAgbQAAguAWgfQAVgeAnAAQAdAAATAQQAUAPAEAcIgzAGQgCgYgSAAQgYAAAAA0QAMgRAbgBQAbABARAQQARARAAAbQAAAdgVAUQgWAUgiAAQgYAAgTgMgAgOAWQgGAGAAALQAAAKAGAGQAGAIAJgBQALABAGgIQAFgHABgJQgBgKgFgHQgHgIgJAAQgJAAgHAIg");
        this.shape_6.setTransform(-1.7, -3.3);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#FFFFFF").s().p("AgsBkQABgkARgpQAQgpAdgfIhcAAIAEgyICPAAIAAAlQgWAagQAqQgPArAAAnIAAAMg");
        this.shape_7.setTransform(-1.8, -3.3);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#FFFFFF").s().p("Ag8BYQgUgQgBgYQABggAfgOQgagNAAgdQAAgbAVgRQAUgSAkAAQAgAAAVAOQAUAQAAAYQAAALgFAJQgEAKgRAKQAhAQAAAhQAAAdgYARQgXAQglAAQgmAAgUgPgAgdArQAAAJAIAHQAIAFAOAAQALABAGgFQAGgEAAgHQAAgLgRgHIgVgIQgOAHgBANgAgPg6QgFAEAAAGQAAALAPAHIARAHQAMgGAAgMQAAgKgHgFQgGgHgMAAQgJABgFAEg");
        this.shape_8.setTransform(-1.8, -3.3);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#FFFFFF").s().p("AgzBZQgSgOgEgZIAzgIQAEASAQAAQALAAAHgMQAGgMAAgUIAAgGQgNATgZAAQgbAAgRgRQgSgSAAgbQAAgfAVgTQAVgTAjAAQAnAAAVAbQAUAaAAAsQAAAwgVAeQgVAegqAAQgcAAgSgOgAgQg3QgHAGAAANQAAALAGAGQAGAHAJAAQAIAAAHgHQAGgFAAgMQAAgLgGgIQgGgGgIAAQgJAAgGAGg");
        this.shape_9.setTransform(-1.9, -3.3);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#FFFFFF").s().p("AAZBLQgVgdAAguQAAgvAWgbQAWgcAjAAQAmAAAVAdQAUAdAAAtQAAAvgWAcQgVAbglAAQgjAAgWgcgABDgtQgEAQgBAbQABAkAEAOQAEANAMAAQAMgBAFgQQAEgQAAgcQAAgkgFgMQgGgMgKAAQgMAAgEAPgAihBkIAAgtIAyAAIAAhdQgdAMgPACIAAgtQAqgJAPgYIAsAAIAACdIAvAAIAAAtg");
        this.shape_10.setTransform(-1.3, -3.3);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#FFFFFF").s().p("AALBmIAAgtIAxAAIAAheQgcANgQABIAAgtQArgJAQgYIAqAAIAACeIAwAAIAAAtgAikBmIAAgtIAyAAIAAheQgdANgPABIAAgtQAqgJAPgYIAsAAIAACeIAvAAIAAAtg");
        this.shape_11.setTransform(-1, -3.5);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#FFFFFF").s().p("AAGBmIAAguIAigZIAcgVQAUgRAGgIQAHgKAAgJQAAgKgGgGQgFgFgJgBQgWAAgDAjIgygKQAFgjAWgRQAWgSAeAAQAhAAAVASQAUARAAAdQAAAUgLARQgLARg3AjIBOAAIgCAygAifBmIAAgtIAxAAIAAheQgcANgQABIAAgtQArgJAPgYIArAAIAACeIAwAAIAAAtg");
        this.shape_12.setTransform(-1.5, -3.5);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#FFFFFF").s().p("AgBAnIAzgGQAGAbAXAAQAMAAAGgGQAIgGgBgJQAAgGgDgGQgEgEgEgCQgEgDgLAAIgYAAIAAgoIAUAAQARAAAEgGQAFgGAAgGQAAgIgGgGQgGgEgKAAQgUAAgEAWIgxgIQAHgcAVgPQAWgPAdAAQAgAAAVAQQATAPAAAZQAAAQgIALQgIALgNAFQAjAJABAkQAAAegXAQQgVAPgjAAQhGAAgPhAgAihBkIAAgtIAxAAIAAhdQgcAMgQACIAAgtQArgJAPgYIArAAIAACdIAwAAIAAAtg");
        this.shape_13.setTransform(-1.2, -3.3);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#FFFFFF").s().p("ABSBmIAAgsIhSAAIAAgsIBLhzIA+AAIAABzIAcAAIAAAsIgcAAIAAAsgAAsAOIAmAAIAAg6gAikBmIAAgtIAyAAIAAheQgcANgQABIAAgtQAqgJAQgYIArAAIAACeIAvAAIAAAtg");
        this.shape_14.setTransform(-1, -3.5);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#FFFFFF").s().p("AAdBXQgXgRgFgcIAzgHQAGAWAWAAQAMAAAHgHQAGgHABgKQgBgLgHgHQgIgGgKgBQgPABgJANIgtgHIAIhyICGAAIgFAyIhUAAIgDAcQARgLAUAAQAagBATATQAUAQAAAeQAAAggXAUQgWATgkAAQgeAAgXgQgAiiBkIAAgtIAyAAIAAhdQgdAMgPACIAAgtQAqgJAPgYIAsAAIAACdIAvAAIAAAtg");
        this.shape_15.setTransform(-1.2, -3.3);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#FFFFFF").s().p("AAqBbQgTgMgKgXQgKgYAAgbQAAguAVgfQAWgeAoAAQAcAAAUAQQATAPAFAcIg0AGQgCgYgRAAQgZAAgBA0QAMgRAdgBQAbABARAQQARARAAAbQAAAdgWAUQgVAUgiAAQgZAAgTgMgABEAWQgGAGAAALQAAAKAGAGQAGAIAKgBQAKABAGgIQAGgHAAgJQAAgKgGgHQgGgIgJAAQgKAAgHAIgAiiBkIAAgtIAyAAIAAhdQgcAMgQACIAAgtQAqgJAQgYIArAAIAACdIAvAAIAAAtg");
        this.shape_16.setTransform(-1.2, -3.3);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#FFFFFF").s().p("AApBmQAAgkARgqQARgoAdggIhdAAIAEgxICQAAIAAAlQgWAZgPAqQgQArAAAnIABANgAieBmIAAgtIAxAAIAAheQgcANgQABIAAgtQArgJAPgYIArAAIAACeIAwAAIAAAtg");
        this.shape_17.setTransform(-1.6, -3.5);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#FFFFFF").s().p("AAVBYQgVgQAAgYQAAggAfgOQgZgNAAgdQAAgbAVgRQAUgSAkAAQAhAAAUAOQAVAQAAAYQAAALgFAJQgFAKgQAKQAgAQAAAhQAAAdgXARQgXAQgmAAQgmAAgUgPgAA0ArQAAAJAIAHQAIAFAOAAQAMABAGgFQAGgEAAgHQAAgLgRgHIgXgIQgOAHAAANgABCg6QgFAEAAAGQAAALAOAHIATAHQAMgGAAgMQAAgKgHgFQgHgHgMAAQgJABgFAEgAiiBkIAAgtIAxAAIAAhdQgcAMgQACIAAgtQArgJAPgYIArAAIAACdIAwAAIAAAtg");
        this.shape_18.setTransform(-1.2, -3.3);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#FFFFFF").s().p("AAfBZQgSgOgEgZIAzgIQADASAQAAQANAAAGgMQAHgMAAgUIAAgGQgNATgaAAQgbAAgSgRQgSgSAAgbQAAgfAVgTQAVgTAjAAQApAAAUAbQAVAaAAAsQAAAwgVAeQgWAegqAAQgcAAgSgOgABBg3QgGAGAAANQAAALAGAGQAGAHAIAAQAJAAAHgHQAHgFAAgMQAAgLgGgIQgGgGgKAAQgJAAgGAGgAihBkIAAgtIAyAAIAAhdQgcAMgQACIAAgtQAqgJAQgYIArAAIAACdIAvAAIAAAtg");
        this.shape_19.setTransform(-1.3, -3.3);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#FFFFFF").s().p("AAeBLQgVgdAAguQAAgvAWgbQAWgcAjAAQAmAAAVAdQAUAdAAAtQAAAvgWAcQgVAbglAAQgjAAgWgcgABIgtQgEAQgBAbQABAkAEAOQAEANAMAAQAMgBAFgQQAEgQAAgcQAAgkgFgMQgGgMgKAAQgMAAgEAPgAimBkIAAguIAigYIAcgWQAUgQAHgJQAGgJAAgKQAAgKgFgFQgGgGgJAAQgWAAgCAjIgzgKQAFgkAWgQQAXgSAeAAQAgAAAVASQAVARgBAdQAAATgLARQgLARg3AkIBOAAIgBAxg");
        this.shape_20.setTransform(-1.8, -3.3);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_1
            }]
        }, 1).to({
            state: [{
                t: this.shape_2
            }]
        }, 1).to({
            state: [{
                t: this.shape_3
            }]
        }, 1).to({
            state: [{
                t: this.shape_4
            }]
        }, 1).to({
            state: [{
                t: this.shape_5
            }]
        }, 1).to({
            state: [{
                t: this.shape_6
            }]
        }, 1).to({
            state: [{
                t: this.shape_7
            }]
        }, 1).to({
            state: [{
                t: this.shape_8
            }]
        }, 1).to({
            state: [{
                t: this.shape_9
            }]
        }, 1).to({
            state: [{
                t: this.shape_10
            }]
        }, 1).to({
            state: [{
                t: this.shape_11
            }]
        }, 1).to({
            state: [{
                t: this.shape_12
            }]
        }, 1).to({
            state: [{
                t: this.shape_13
            }]
        }, 1).to({
            state: [{
                t: this.shape_14
            }]
        }, 1).to({
            state: [{
                t: this.shape_15
            }]
        }, 1).to({
            state: [{
                t: this.shape_16
            }]
        }, 1).to({
            state: [{
                t: this.shape_17
            }]
        }, 1).to({
            state: [{
                t: this.shape_18
            }]
        }, 1).to({
            state: [{
                t: this.shape_19
            }]
        }, 1).to({
            state: [{
                t: this.shape_20
            }]
        }, 1).wait(2));

        // gotas celestes
        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#00CCCC").s().p("AgkBRQgPgZgBgXQgCgYAVgpIAihHIAhBEQATAlAAAgQAAAggOASQgOASgXACIgDAAQgVAAgOgXg");
        this.shape_21.setTransform(-12.9, 28.4);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f("#00CCCC").s().p("AiWBTQgPgZgCgXQgBgYAVgpIAihHIAiBEQATAlAAAgQAAAggPASQgNASgYACIgEAAQgVAAgNgXgABOBPQgOgZgCgYQgBgXAUgqIAjhGIAhBEQATAlAAAfQAAAggOASQgNASgYACIgFAAQgUAAgOgWg");
        this.shape_22.setTransform(-1.5, 28.2);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#00CCCC").s().p("AiWDXQgPgZgCgXQgBgXAVgrIAihHIAiBEQATAmAAAgQAAAggPASQgNASgYABIgEABQgVAAgNgXgAiWgvQgPgagCgXQgBgXAVgqIAihHIAiBEQATAlAAAgQAAAggPATQgNARgYACIgEABQgVAAgNgXgABOg0QgOgZgCgXQgBgYAUgqIAjhHIAhBEQATAmAAAgQAAAggOASQgNASgYABIgFABQgUAAgOgXg");
        this.shape_23.setTransform(-1.5, 41.4);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f("#00CCCC").s().p("ABMDYQgPgZgBgWQgCgYAVgqIAjhHIAhBEQATAlAAAhQAAAggOASQgOARgXACIgFAAQgVAAgNgXgAiWDWQgPgZgCgYQgBgXAVgrIAihGIAiBEQATAlAAAgQAAAggPASQgNASgYACIgEAAQgVAAgNgWgAiWgxQgPgZgCgXQgBgYAVgqIAihHIAiBEQATAmAAAgQAAAggPASQgNASgYACIgEAAQgVAAgNgXgABOg1QgOgZgCgYQgBgXAUgrIAjhGIAhBEQATAlAAAgQAAAggOASQgNASgYACIgFAAQgUAAgOgWg");
        this.shape_24.setTransform(-1.5, 41.5);

        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f("#00CCCC").s().p("AiWFbQgPgZgCgXQgBgXAVgrIAihHIAiBEQATAmAAAgQAAAggPASQgNARgYACIgEAAQgVAAgNgWgABMBWQgPgZgBgWQgCgYAVgpIAjhHIAhBEQATAkAAAhQAAAggOASQgOARgXACIgFAAQgVAAgNgXgAiWBUQgPgZgCgYQgBgXAVgqIAihGIAiBEQATAkAAAgQAAAggPASQgNASgYACIgEAAQgVAAgNgWgAiWizQgPgZgCgXQgBgYAVgqIAihHIAiBEQATAmAAAgQAAAggPASQgNASgYACIgEAAQgVAAgNgXgABOi3QgOgZgCgYQgBgXAUgrIAjhGIAhBEQATAlAAAgQAAAggOASQgNASgYACIgFAAQgUAAgOgWg");
        this.shape_25.setTransform(-1.5, 54.5);

        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f("#00CCCC").s().p("AiWFbQgPgZgCgXQgBgXAVgrIAihHIAiBEQATAmAAAgQAAAggPASQgNARgYACIgEAAQgVAAgNgWgABMFWQgPgZgBgXQgCgYAVgqIAjhGIAhBDQATAmAAAgQAAAggOASQgOASgXACIgFAAQgVAAgNgXgABMBWQgPgZgBgWQgCgYAVgpIAjhHIAhBEQATAkAAAhQAAAggOASQgOARgXACIgFAAQgVAAgNgXgAiWBUQgPgZgCgYQgBgXAVgqIAihGIAiBEQATAkAAAgQAAAggPASQgNASgYACIgEAAQgVAAgNgWgAiWizQgPgZgCgXQgBgYAVgqIAihHIAiBEQATAmAAAgQAAAggPASQgNASgYACIgEAAQgVAAgNgXgABOi3QgOgZgCgYQgBgXAUgrIAjhGIAhBEQATAlAAAgQAAAggOASQgNASgYACIgFAAQgUAAgOgWg");
        this.shape_26.setTransform(-1.5, 54.5);

        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f("#00CCCC").s().p("AiWHeQgPgZgCgXQgBgXAVgqIAihHIAiBDQATAmAAAhQAAAggPASQgNARgYACIgEAAQgVAAgNgXgAiWDXQgPgZgCgXQgBgXAVgrIAihHIAiBEQATAmAAAgQAAAggPASQgNARgYACIgEABQgVAAgNgXgABMDSQgPgZgBgXQgCgYAVgqIAjhGIAhBDQATAmAAAgQAAAggOASQgOASgXACIgFAAQgVAAgNgXgABMgtQgPgZgBgWQgCgYAVgqIAjhHIAhBEQATAlAAAhQAAAggOASQgOARgXACIgFABQgVAAgNgYgAiWgvQgPgZgCgYQgBgXAVgrIAihGIAiBEQATAlAAAgQAAAggPASQgNASgYACIgEAAQgVAAgNgWgAiWk3QgPgZgCgXQgBgYAVgqIAihHIAiBEQATAmAAAgQAAAggPASQgNASgYACIgEAAQgVAAgNgXgABOk7QgOgZgCgYQgBgXAUgrIAjhGIAhBEQATAlAAAgQAAAggOASQgNASgYACIgFAAQgUAAgOgWg");
        this.shape_27.setTransform(-1.5, 67.7);

        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f("#00CCCC").s().p("AiWHeQgPgZgCgXQgBgXAVgqIAihHIAiBDQATAmAAAhQAAAggPASQgNARgYACIgEAAQgVAAgNgXgABMHaQgPgZgBgXQgCgYAVgqIAjhHIAhBEQATAmAAAgQAAAggOASQgOASgXACIgEAAQgWAAgNgXgAiWDXQgPgZgCgXQgBgXAVgrIAihHIAiBEQATAmAAAgQAAAggPASQgNARgYACIgEABQgVAAgNgXgABMDSQgPgZgBgXQgCgYAVgqIAjhGIAhBDQATAmAAAgQAAAggOASQgOASgXACIgFAAQgVAAgNgXgABMgtQgPgZgBgWQgCgYAVgqIAjhHIAhBEQATAlAAAhQAAAggOASQgOARgXACIgFABQgVAAgNgYgAiWgvQgPgZgCgYQgBgXAVgrIAihGIAiBEQATAlAAAgQAAAggPASQgNASgYACIgEAAQgVAAgNgWgAiWk3QgPgZgCgXQgBgYAVgqIAihHIAiBEQATAmAAAgQAAAggPASQgNASgYACIgEAAQgVAAgNgXgABOk7QgOgZgCgYQgBgXAUgrIAjhGIAhBEQATAlAAAgQAAAggOASQgNASgYACIgFAAQgUAAgOgWg");
        this.shape_28.setTransform(-1.5, 67.7);

        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f("#00CCCC").s().p("AiWJiQgPgZgCgXQgBgXAVgqIAihIIAiBEQATAmAAAgQAAAggPATQgNARgYACIgEAAQgVAAgNgXgAiWFbQgPgZgCgXQgBgYAVgqIAihHIAiBEQATAmAAAgQAAAggPASQgNASgYABIgEAAQgVAAgNgWgABMFWQgPgZgBgXQgCgXAVgrIAjhGIAhBEQATAlAAAgQAAAggOATQgOARgXACIgEAAQgWAAgNgXgAiWBUQgPgagCgXQgBgXAVgqIAihGIAiBDQATAmAAAgQAAAfgPATQgNARgYACIgEAAQgVAAgNgWgABMBOQgPgZgBgWQgCgYAVgpIAjhHIAhBEQATAlAAAgQAAAggOASQgOARgXACIgFAAQgVAAgNgXgABMiwQgPgZgBgXQgCgYAVgqIAjhGIAhBDQATAmAAAgQAAAggOASQgOASgXACIgFAAQgVAAgNgXgAiWizQgPgZgCgXQgBgXAVgrIAihHIAiBEQATAmAAAgQAAAggPASQgNASgYABIgEAAQgVAAgNgWgAiWm6QgPgagCgXQgBgXAVgqIAihHIAiBEQATAlAAAgQAAAggPATQgNARgYACIgEAAQgVAAgNgWgABOm/QgOgZgCgXQgBgYAUgqIAjhHIAhBEQATAmAAAgQAAAggOASQgNASgYABIgFAAQgUAAgOgWg");
        this.shape_29.setTransform(-1.5, 80.9);

        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f("#00CCCC").s().p("AiWJiQgPgZgCgXQgBgXAVgqIAihIIAiBEQATAmAAAgQAAAggPATQgNARgYACIgEAAQgVAAgNgXgABMJfQgPgZgBgXQgCgYAVgqIAjhHIAhBEQATAmAAAgQAAAggOASQgOASgXABIgFAAQgVAAgNgWgAiWFbQgPgZgCgXQgBgYAVgqIAihHIAiBEQATAmAAAgQAAAggPASQgNASgYABIgEAAQgVAAgNgWgABMFWQgPgZgBgXQgCgXAVgrIAjhGIAhBEQATAlAAAgQAAAggOATQgOARgXACIgEAAQgWAAgNgXgAiWBUQgPgagCgXQgBgXAVgqIAihGIAiBDQATAmAAAgQAAAfgPATQgNARgYACIgEAAQgVAAgNgWgABMBOQgPgZgBgWQgCgYAVgpIAjhHIAhBEQATAlAAAgQAAAggOASQgOARgXACIgFAAQgVAAgNgXgABMiwQgPgZgBgXQgCgYAVgqIAjhGIAhBDQATAmAAAgQAAAggOASQgOASgXACIgFAAQgVAAgNgXgAiWizQgPgZgCgXQgBgXAVgrIAihHIAiBEQATAmAAAgQAAAggPASQgNASgYABIgEAAQgVAAgNgWgAiWm6QgPgagCgXQgBgXAVgqIAihHIAiBEQATAlAAAgQAAAggPATQgNARgYACIgEAAQgVAAgNgWgABOm/QgOgZgCgXQgBgYAUgqIAjhHIAhBEQATAmAAAgQAAAggOASQgNASgYABIgFAAQgUAAgOgWg");
        this.shape_30.setTransform(-1.5, 80.9);

        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f("#00CCCC").s().p("AiWLuQgPgZgCgXQgBgXAVgrIAihGIAiBDQATAmAAAgQAAAggPATQgNARgYACIgEAAQgVAAgNgXgAiWHWQgPgZgCgXQgBgYAVgqIAihHIAiBEQATAmAAAgQAAAggPASQgNASgYABIgEABQgVAAgNgXgABMHSQgPgZgBgXQgCgXAVgrIAjhGIAhBEQATAlAAAgQAAAggOASQgOASgXACIgFAAQgVAAgNgXgAiWDOQgPgZgCgXQgBgXAVgqIAihHIAiBDQATAmAAAhQAAAggPASQgNARgYACIgEAAQgVAAgNgXgABMDKQgPgZgBgXQgCgYAVgqIAjhHIAhBEQATAmAAAgQAAAggOASQgOASgXACIgEAAQgWAAgNgXgAiWg4QgPgZgCgXQgBgXAVgrIAihHIAiBEQATAmAAAgQAAAggPASQgNARgYACIgEABQgVAAgNgXgABMg9QgPgZgBgXQgCgYAVgqIAjhGIAhBDQATAmAAAgQAAAggOASQgOASgXACIgFAAQgVAAgNgXgABMk9QgPgZgBgWQgCgYAVgqIAjhHIAhBEQATAlAAAhQAAAggOASQgOARgXACIgFABQgVAAgNgYgAiWk/QgPgZgCgYQgBgXAVgrIAihGIAiBEQATAlAAAgQAAAggPASQgNASgYACIgEAAQgVAAgNgWgAiWpHQgPgZgCgXQgBgYAVgqIAihHIAiBEQATAmAAAgQAAAggPASQgNASgYACIgEAAQgVAAgNgXgABOpLQgOgZgCgYQgBgXAUgrIAjhGIAhBEQATAlAAAgQAAAggOASQgNASgYACIgFAAQgUAAgOgWg");
        this.shape_31.setTransform(-1.5, 94.9);

        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f("#00CCCC").s().p("AiYLuQgPgZgBgXQgCgXAVgrIAjhGIAhBDQATAmAAAgQAAAggOATQgOARgXACIgFAAQgVAAgNgXgABQLqQgPgZgCgXQgBgYAVgqIAihHIAiBEQATAmAAAgQAAAggPASQgNASgYACIgDAAQgWAAgNgXgAiYHWQgPgZgBgXQgCgYAVgqIAjhHIAhBEQATAmAAAgQAAAggOASQgOASgXABIgEABQgWAAgNgXgABLHSQgPgZgCgXQgBgXAVgrIAihGIAiBEQATAlAAAgQAAAggPASQgNASgYACIgEAAQgVAAgNgXgAiYDOQgPgZgBgXQgCgXAVgqIAjhHIAhBDQATAmAAAhQAAAggOASQgOARgXACIgFAAQgVAAgNgXgABLDKQgPgZgCgXQgBgYAVgqIAihHIAiBEQATAmAAAgQAAAggPASQgNASgYACIgDAAQgWAAgNgXgAiYg4QgPgZgBgXQgCgXAVgrIAjhHIAhBEQATAmAAAgQAAAggOASQgOARgXACIgFABQgVAAgNgXgABLg9QgPgZgCgXQgBgYAVgqIAihGIAiBDQATAmAAAgQAAAggPASQgNASgYACIgEAAQgVAAgNgXgABLk9QgPgZgCgWQgBgYAVgqIAihHIAiBEQATAlAAAhQAAAggPASQgNARgYACIgEABQgVAAgNgYgAiYk/QgPgZgBgYQgCgXAVgrIAjhGIAhBEQATAlAAAgQAAAggOASQgOASgXACIgFAAQgVAAgNgWgAiYpHQgPgZgBgXQgCgYAVgqIAjhHIAhBEQATAmAAAgQAAAggOASQgOASgXACIgEAAQgWAAgNgXgABMpLQgOgZgBgYQgCgXAVgrIAihGIAiBEQATAlAAAgQAAAggOASQgOASgYACIgEAAQgVAAgOgWg");
        this.shape_32.setTransform(-1.3, 94.9);

        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f("#00CCCC").s().p("AiYNyQgPgZgBgXQgCgXAVgrIAjhHIAhBEQATAmAAAgQAAAggOATQgOARgXACIgEAAQgWAAgNgXgAiYJrQgPgZgBgXQgCgYAVgqIAjhHIAhBEQATAmAAAgQAAAggOASQgOARgXACIgFAAQgVAAgNgWgABQJnQgPgagCgXQgBgXAVgrIAihGIAiBEQATAlAAAgQAAAggPATQgNARgYACIgDAAQgWAAgNgWgAiYFSQgPgZgBgXQgCgXAVgqIAjhIIAhBEQATAmAAAgQAAAggOATQgOARgXACIgEAAQgWAAgNgXgABLFPQgPgZgCgXQgBgYAVgqIAihHIAiBEQATAmAAAgQAAAggPASQgNASgYABIgEAAQgVAAgNgWgAiYBLQgPgZgBgXQgCgYAVgpIAjhHIAhBEQATAmAAAfQAAAggOASQgOASgXABIgFAAQgVAAgNgWgABLBGQgPgZgCgXQgBgWAVgrIAihGIAiBEQATAlAAAfQAAAggPATQgNARgYACIgDAAQgWAAgNgXgAiYi7QgPgagBgXQgCgXAVgrIAjhGIAhBDQATAnAAAgQAAAfgOATQgOARgXACIgFAAQgVAAgNgWgABLjBQgPgZgCgWQgBgYAVgqIAihHIAiBEQATAlAAAhQAAAggPASQgNARgYACIgEAAQgVAAgNgXgABLnAQgPgZgCgXQgBgYAVgqIAihGIAiBDQATAmAAAgQAAAggPASQgNASgYACIgEAAQgVAAgNgXgAiYnDQgPgZgBgXQgCgXAVgrIAjhHIAhBEQATAmAAAgQAAAggOASQgOASgXABIgFAAQgVAAgNgWgAiYrKQgPgagBgXQgCgXAVgqIAjhHIAhBEQATAlAAAgQAAAggOATQgOARgXACIgEAAQgWAAgNgWgABMrPQgOgZgBgXQgCgYAVgqIAihHIAiBEQATAmAAAgQAAAggOASQgOASgYABIgEAAQgVAAgOgWg");
        this.shape_33.setTransform(-1.3, 108.1);

        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f("#00CCCC").s().p("AiYNyQgPgZgBgXQgCgXAVgrIAjhHIAhBEQATAmAAAgQAAAggOATQgOARgXACIgEAAQgWAAgNgXgABQNuQgPgZgCgXQgBgXAVgrIAihHIAiBEQATAmAAAgQAAAggPASQgNASgYABIgEAAQgVAAgNgWgAiYJrQgPgZgBgXQgCgYAVgqIAjhHIAhBEQATAmAAAgQAAAggOASQgOARgXACIgFAAQgVAAgNgWgABQJnQgPgagCgXQgBgXAVgrIAihGIAiBEQATAlAAAgQAAAggPATQgNARgYACIgDAAQgWAAgNgWgAiYFSQgPgZgBgXQgCgXAVgqIAjhIIAhBEQATAmAAAgQAAAggOATQgOARgXACIgEAAQgWAAgNgXgABLFPQgPgZgCgXQgBgYAVgqIAihHIAiBEQATAmAAAgQAAAggPASQgNASgYABIgEAAQgVAAgNgWgAiYBLQgPgZgBgXQgCgYAVgpIAjhHIAhBEQATAmAAAfQAAAggOASQgOASgXABIgFAAQgVAAgNgWgABLBGQgPgZgCgXQgBgWAVgrIAihGIAiBEQATAlAAAfQAAAggPATQgNARgYACIgDAAQgWAAgNgXgAiYi7QgPgagBgXQgCgXAVgrIAjhGIAhBDQATAnAAAgQAAAfgOATQgOARgXACIgFAAQgVAAgNgWgABLjBQgPgZgCgWQgBgYAVgqIAihHIAiBEQATAlAAAhQAAAggPASQgNARgYACIgEAAQgVAAgNgXgABLnAQgPgZgCgXQgBgYAVgqIAihGIAiBDQATAmAAAgQAAAggPASQgNASgYACIgEAAQgVAAgNgXgAiYnDQgPgZgBgXQgCgXAVgrIAjhHIAhBEQATAmAAAgQAAAggOASQgOASgXABIgFAAQgVAAgNgWgAiYrKQgPgagBgXQgCgXAVgqIAjhHIAhBEQATAlAAAgQAAAggOATQgOARgXACIgEAAQgWAAgNgWgABMrPQgOgZgBgXQgCgYAVgqIAihHIAiBEQATAmAAAgQAAAggOASQgOASgYABIgEAAQgVAAgOgWg");
        this.shape_34.setTransform(-1.3, 108.1);

        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.f("#00CCCC").s().p("AiYP2QgPgZgBgXQgCgXAVgrIAjhHIAhBEQATAmAAAgQAAAggOASQgOASgXABIgFAAQgVAAgNgWgAiYLvQgPgZgBgYQgCgXAVgqIAjhHIAhBEQATAmAAAgQAAAggOASQgOASgXABIgEAAQgWAAgNgWgABQLrQgPgZgCgYQgBgXAVgrIAihGIAiBEQATAlAAAgQAAAggPASQgNASgYACIgEAAQgVAAgNgWgAiYHnQgPgZgBgXQgCgXAVgrIAjhGIAhBDQATAmAAAgQAAAggOATQgOARgXACIgFAAQgVAAgNgXgABQHjQgPgZgCgXQgBgYAVgqIAihHIAiBEQATAmAAAgQAAAggPASQgNASgYACIgDAAQgWAAgNgXgAiYDPQgPgZgBgXQgCgYAVgqIAjhHIAhBEQATAmAAAgQAAAggOASQgOASgXABIgEAAQgWAAgNgWgABLDLQgPgZgCgXQgBgXAVgrIAihGIAiBEQATAlAAAgQAAAggPASQgNASgYACIgEAAQgVAAgNgXgAiYg4QgPgZgBgXQgCgXAVgqIAjhHIAhBDQATAmAAAhQAAAggOASQgOARgXACIgFAAQgVAAgNgXgABLg8QgPgZgCgXQgBgYAVgqIAihHIAiBEQATAmAAAgQAAAggPASQgNASgYACIgDAAQgWAAgNgXgAiYk/QgPgZgBgXQgCgXAVgrIAjhHIAhBEQATAmAAAgQAAAggOASQgOARgXACIgFAAQgVAAgNgWgABLlEQgPgZgCgXQgBgYAVgqIAihGIAiBDQATAmAAAgQAAAggPASQgNASgYACIgEAAQgVAAgNgXgABLpEQgPgZgCgWQgBgYAVgqIAihHIAiBEQATAlAAAhQAAAggPASQgNARgYACIgEAAQgVAAgNgXgAiYpGQgPgZgBgYQgCgXAVgrIAjhGIAhBEQATAlAAAgQAAAggOASQgOASgXACIgFAAQgVAAgNgWgAiYtOQgPgZgBgXQgCgYAVgqIAjhHIAhBEQATAmAAAgQAAAggOASQgOASgXACIgEAAQgWAAgNgXgABMtSQgOgZgBgYQgCgXAVgrIAihGIAiBEQATAlAAAgQAAAggOASQgOASgYACIgEAAQgVAAgOgWg");
        this.shape_35.setTransform(-1.3, 121.2);

        this.shape_36 = new cjs.Shape();
        this.shape_36.graphics.f("#00CCCC").s().p("AiYP2QgPgZgBgXQgCgXAVgrIAjhHIAhBEQATAmAAAgQAAAggOASQgOASgXABIgFAAQgVAAgNgWgABQPyQgPgZgCgXQgBgYAVgqIAihHIAiBEQATAmAAAgQAAAggPASQgNARgYACIgEAAQgVAAgNgWgAiYLvQgPgZgBgYQgCgXAVgqIAjhHIAhBEQATAmAAAgQAAAggOASQgOASgXABIgEAAQgWAAgNgWgABQLrQgPgZgCgYQgBgXAVgrIAihGIAiBEQATAlAAAgQAAAggPASQgNASgYACIgEAAQgVAAgNgWgAiYHnQgPgZgBgXQgCgXAVgrIAjhGIAhBDQATAmAAAgQAAAggOATQgOARgXACIgFAAQgVAAgNgXgABQHjQgPgZgCgXQgBgYAVgqIAihHIAiBEQATAmAAAgQAAAggPASQgNASgYACIgDAAQgWAAgNgXgAiYDPQgPgZgBgXQgCgYAVgqIAjhHIAhBEQATAmAAAgQAAAggOASQgOASgXABIgEAAQgWAAgNgWgABLDLQgPgZgCgXQgBgXAVgrIAihGIAiBEQATAlAAAgQAAAggPASQgNASgYACIgEAAQgVAAgNgXgAiYg4QgPgZgBgXQgCgXAVgqIAjhHIAhBDQATAmAAAhQAAAggOASQgOARgXACIgFAAQgVAAgNgXgABLg8QgPgZgCgXQgBgYAVgqIAihHIAiBEQATAmAAAgQAAAggPASQgNASgYACIgDAAQgWAAgNgXgAiYk/QgPgZgBgXQgCgXAVgrIAjhHIAhBEQATAmAAAgQAAAggOASQgOARgXACIgFAAQgVAAgNgWgABLlEQgPgZgCgXQgBgYAVgqIAihGIAiBDQATAmAAAgQAAAggPASQgNASgYACIgEAAQgVAAgNgXgABLpEQgPgZgCgWQgBgYAVgqIAihHIAiBEQATAlAAAhQAAAggPASQgNARgYACIgEAAQgVAAgNgXgAiYpGQgPgZgBgYQgCgXAVgrIAjhGIAhBEQATAlAAAgQAAAggOASQgOASgXACIgFAAQgVAAgNgWgAiYtOQgPgZgBgXQgCgYAVgqIAjhHIAhBEQATAmAAAgQAAAggOASQgOASgXACIgEAAQgWAAgNgXgABMtSQgOgZgBgYQgCgXAVgrIAihGIAiBEQATAlAAAgQAAAggOASQgOASgYACIgEAAQgVAAgOgWg");
        this.shape_36.setTransform(-1.3, 121.2);

        this.shape_37 = new cjs.Shape();
        this.shape_37.graphics.f("#00CCCC").s().p("AiYR6QgPgagBgXQgCgXAVgqIAjhHIAhBEQATAmAAAgQAAAggOASQgOARgXACIgFAAQgVAAgNgWgAiYNyQgPgZgBgXQgCgXAVgrIAjhHIAhBEQATAmAAAgQAAAggOASQgOASgXABIgFAAQgVAAgNgWgABQNuQgPgZgCgXQgBgYAVgqIAihHIAiBEQATAmAAAgQAAAggPASQgNARgYACIgEAAQgVAAgNgWgAiYJrQgPgZgBgYQgCgXAVgqIAjhHIAhBEQATAmAAAgQAAAggOASQgOASgXABIgEAAQgWAAgNgWgABQJnQgPgZgCgYQgBgXAVgrIAihGIAiBEQATAlAAAgQAAAggPASQgNASgYACIgEAAQgVAAgNgWgAiYFjQgPgZgBgXQgCgXAVgrIAjhGIAhBDQATAmAAAgQAAAggOATQgOARgXACIgFAAQgVAAgNgXgABQFfQgPgZgCgXQgBgYAVgqIAihHIAiBEQATAmAAAgQAAAggPASQgNASgYACIgDAAQgWAAgNgXgAiYBLQgPgZgBgXQgCgYAVgpIAjhHIAhBEQATAmAAAfQAAAggOASQgOASgXABIgEAAQgWAAgNgWgABLBHQgPgZgCgXQgBgXAVgqIAihGIAiBEQATAlAAAfQAAAggPASQgNASgYACIgEAAQgVAAgNgXgAiYi8QgPgZgBgXQgCgXAVgqIAjhHIAhBDQATAmAAAhQAAAggOASQgOARgXACIgFAAQgVAAgNgXgABLjAQgPgZgCgXQgBgYAVgqIAihHIAiBEQATAmAAAgQAAAggPASQgNASgYACIgDAAQgWAAgNgXgAiYnDQgPgZgBgXQgCgXAVgrIAjhHIAhBEQATAmAAAgQAAAggOASQgOARgXACIgFAAQgVAAgNgWgABLnIQgPgZgCgXQgBgYAVgqIAihGIAiBDQATAmAAAgQAAAggPASQgNASgYACIgEAAQgVAAgNgXgABLrIQgPgZgCgWQgBgYAVgqIAihHIAiBEQATAlAAAhQAAAggPASQgNARgYACIgEAAQgVAAgNgXgAiYrKQgPgZgBgYQgCgXAVgrIAjhGIAhBEQATAlAAAgQAAAggOASQgOASgXACIgFAAQgVAAgNgWgAiYvSQgPgZgBgXQgCgYAVgqIAjhHIAhBEQATAmAAAgQAAAggOASQgOASgXACIgEAAQgWAAgNgXgABMvWQgOgZgBgYQgCgXAVgrIAihGIAiBEQATAlAAAgQAAAggOASQgOASgYACIgEAAQgVAAgOgWg");
        this.shape_37.setTransform(-1.3, 134.4);

        this.shape_38 = new cjs.Shape();
        this.shape_38.graphics.f("#00CCCC").s().p("AiYR6QgPgagBgXQgCgXAVgqIAjhHIAhBEQATAmAAAgQAAAggOASQgOARgXACIgFAAQgVAAgNgWgABQR1QgPgZgCgXQgBgXAVgqIAihHIAiBDQATAmAAAgQAAAhgPASQgNARgYACIgEAAQgVAAgNgXgAiYNyQgPgZgBgXQgCgXAVgrIAjhHIAhBEQATAmAAAgQAAAggOASQgOASgXABIgFAAQgVAAgNgWgABQNuQgPgZgCgXQgBgYAVgqIAihHIAiBEQATAmAAAgQAAAggPASQgNARgYACIgEAAQgVAAgNgWgAiYJrQgPgZgBgYQgCgXAVgqIAjhHIAhBEQATAmAAAgQAAAggOASQgOASgXABIgEAAQgWAAgNgWgABQJnQgPgZgCgYQgBgXAVgrIAihGIAiBEQATAlAAAgQAAAggPASQgNASgYACIgEAAQgVAAgNgWgAiYFjQgPgZgBgXQgCgXAVgrIAjhGIAhBDQATAmAAAgQAAAggOATQgOARgXACIgFAAQgVAAgNgXgABQFfQgPgZgCgXQgBgYAVgqIAihHIAiBEQATAmAAAgQAAAggPASQgNASgYACIgDAAQgWAAgNgXgAiYBLQgPgZgBgXQgCgYAVgpIAjhHIAhBEQATAmAAAfQAAAggOASQgOASgXABIgEAAQgWAAgNgWgABLBHQgPgZgCgXQgBgXAVgqIAihGIAiBEQATAlAAAfQAAAggPASQgNASgYACIgEAAQgVAAgNgXgAiYi8QgPgZgBgXQgCgXAVgqIAjhHIAhBDQATAmAAAhQAAAggOASQgOARgXACIgFAAQgVAAgNgXgABLjAQgPgZgCgXQgBgYAVgqIAihHIAiBEQATAmAAAgQAAAggPASQgNASgYACIgDAAQgWAAgNgXgAiYnDQgPgZgBgXQgCgXAVgrIAjhHIAhBEQATAmAAAgQAAAggOASQgOARgXACIgFAAQgVAAgNgWgABLnIQgPgZgCgXQgBgYAVgqIAihGIAiBDQATAmAAAgQAAAggPASQgNASgYACIgEAAQgVAAgNgXgABLrIQgPgZgCgWQgBgYAVgqIAihHIAiBEQATAlAAAhQAAAggPASQgNARgYACIgEAAQgVAAgNgXgAiYrKQgPgZgBgYQgCgXAVgrIAjhGIAhBEQATAlAAAgQAAAggOASQgOASgXACIgFAAQgVAAgNgWgAiYvSQgPgZgBgXQgCgYAVgqIAjhHIAhBEQATAmAAAgQAAAggOASQgOASgXACIgEAAQgWAAgNgXgABMvWQgOgZgBgYQgCgXAVgrIAihGIAiBEQATAlAAAgQAAAggOASQgOASgYACIgEAAQgVAAgOgWg");
        this.shape_38.setTransform(-1.3, 134.4);

        this.shape_39 = new cjs.Shape();
        this.shape_39.graphics.f("#00CCCC").s().p("AiYT9QgPgZgBgXQgCgYAVgqIAjhGIAhBDQATAmAAAgQAAAggOASQgOASgXACIgFAAQgVAAgNgXgAiYP2QgPgagBgXQgCgXAVgqIAjhHIAhBEQATAmAAAgQAAAggOASQgOARgXACIgFABQgVAAgNgXgABQPxQgPgZgCgXQgBgXAVgqIAihHIAiBDQATAmAAAgQAAAhgPASQgNARgYACIgEAAQgVAAgNgXgAiYLuQgPgZgBgXQgCgXAVgrIAjhHIAhBEQATAmAAAgQAAAggOASQgOASgXABIgFABQgVAAgNgXgABQLqQgPgZgCgXQgBgYAVgqIAihHIAiBEQATAmAAAgQAAAggPASQgNARgYACIgEABQgVAAgNgXgAiYHnQgPgZgBgYQgCgXAVgqIAjhHIAhBEQATAmAAAgQAAAggOASQgOASgXABIgEABQgWAAgNgXgABQHjQgPgZgCgYQgBgXAVgrIAihGIAiBEQATAlAAAgQAAAggPASQgNASgYACIgEAAQgVAAgNgWgAiYDfQgPgZgBgXQgCgXAVgrIAjhGIAhBDQATAmAAAgQAAAggOATQgOARgXACIgFAAQgVAAgNgXgABQDbQgPgZgCgXQgBgYAVgqIAihHIAiBEQATAmAAAgQAAAggPASQgNASgYACIgDAAQgWAAgNgXgAiYg4QgPgZgBgXQgCgYAVgqIAjhHIAhBEQATAmAAAgQAAAggOASQgOASgXABIgEABQgWAAgNgXgABLg8QgPgZgCgXQgBgXAVgrIAihGIAiBEQATAlAAAgQAAAggPASQgNASgYACIgEAAQgVAAgNgXgAiYlAQgPgZgBgXQgCgXAVgqIAjhHIAhBDQATAmAAAhQAAAggOASQgOARgXACIgFAAQgVAAgNgXgABLlEQgPgZgCgXQgBgYAVgqIAihHIAiBEQATAmAAAgQAAAggPASQgNASgYACIgDAAQgWAAgNgXgAiYpHQgPgZgBgXQgCgXAVgrIAjhHIAhBEQATAmAAAgQAAAggOASQgOARgXACIgFABQgVAAgNgXgABLpMQgPgZgCgXQgBgYAVgqIAihGIAiBDQATAmAAAgQAAAggPASQgNASgYACIgEAAQgVAAgNgXgABLtMQgPgZgCgWQgBgYAVgqIAihHIAiBEQATAlAAAhQAAAggPASQgNARgYACIgEABQgVAAgNgYgAiYtOQgPgZgBgYQgCgXAVgrIAjhGIAhBEQATAlAAAgQAAAggOASQgOASgXACIgFAAQgVAAgNgWgAiYxWQgPgZgBgXQgCgYAVgqIAjhHIAhBEQATAmAAAgQAAAggOASQgOASgXACIgEAAQgWAAgNgXgABMxaQgOgZgBgYQgCgXAVgrIAihGIAiBEQATAlAAAgQAAAggOASQgOASgYACIgEAAQgVAAgOgWg");
        this.shape_39.setTransform(-1.3, 147.6);

        this.shape_40 = new cjs.Shape();
        this.shape_40.graphics.f("#00CCCC").s().p("AiYT9QgPgZgBgXQgCgYAVgqIAjhGIAhBDQATAmAAAgQAAAggOASQgOASgXACIgFAAQgVAAgNgXgABQT5QgPgZgCgYQgBgXAVgqIAihHIAiBEQATAmAAAgQAAAggPASQgNASgYABIgDABQgWAAgNgXgAiYP2QgPgagBgXQgCgXAVgqIAjhHIAhBEQATAmAAAgQAAAggOASQgOARgXACIgFABQgVAAgNgXgABQPxQgPgZgCgXQgBgXAVgqIAihHIAiBDQATAmAAAgQAAAhgPASQgNARgYACIgEAAQgVAAgNgXgAiYLuQgPgZgBgXQgCgXAVgrIAjhHIAhBEQATAmAAAgQAAAggOASQgOASgXABIgFABQgVAAgNgXgABQLqQgPgZgCgXQgBgYAVgqIAihHIAiBEQATAmAAAgQAAAggPASQgNARgYACIgEABQgVAAgNgXgAiYHnQgPgZgBgYQgCgXAVgqIAjhHIAhBEQATAmAAAgQAAAggOASQgOASgXABIgEABQgWAAgNgXgABQHjQgPgZgCgYQgBgXAVgrIAihGIAiBEQATAlAAAgQAAAggPASQgNASgYACIgEAAQgVAAgNgWgAiYDfQgPgZgBgXQgCgXAVgrIAjhGIAhBDQATAmAAAgQAAAggOATQgOARgXACIgFAAQgVAAgNgXgABQDbQgPgZgCgXQgBgYAVgqIAihHIAiBEQATAmAAAgQAAAggPASQgNASgYACIgDAAQgWAAgNgXgAiYg4QgPgZgBgXQgCgYAVgqIAjhHIAhBEQATAmAAAgQAAAggOASQgOASgXABIgEABQgWAAgNgXgABLg8QgPgZgCgXQgBgXAVgrIAihGIAiBEQATAlAAAgQAAAggPASQgNASgYACIgEAAQgVAAgNgXgAiYlAQgPgZgBgXQgCgXAVgqIAjhHIAhBDQATAmAAAhQAAAggOASQgOARgXACIgFAAQgVAAgNgXgABLlEQgPgZgCgXQgBgYAVgqIAihHIAiBEQATAmAAAgQAAAggPASQgNASgYACIgDAAQgWAAgNgXgAiYpHQgPgZgBgXQgCgXAVgrIAjhHIAhBEQATAmAAAgQAAAggOASQgOARgXACIgFABQgVAAgNgXgABLpMQgPgZgCgXQgBgYAVgqIAihGIAiBDQATAmAAAgQAAAggPASQgNASgYACIgEAAQgVAAgNgXgABLtMQgPgZgCgWQgBgYAVgqIAihHIAiBEQATAlAAAhQAAAggPASQgNARgYACIgEABQgVAAgNgYgAiYtOQgPgZgBgYQgCgXAVgrIAjhGIAhBEQATAlAAAgQAAAggOASQgOASgXACIgFAAQgVAAgNgWgAiYxWQgPgZgBgXQgCgYAVgqIAjhHIAhBEQATAmAAAgQAAAggOASQgOASgXACIgEAAQgWAAgNgXgABMxaQgOgZgBgYQgCgXAVgrIAihGIAiBEQATAlAAAgQAAAggOASQgOASgYACIgEAAQgVAAgOgWg");
        this.shape_40.setTransform(-1.3, 147.6);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.shape_21
            }]
        }, 1).to({
            state: [{
                t: this.shape_22
            }]
        }, 1).to({
            state: [{
                t: this.shape_23
            }]
        }, 1).to({
            state: [{
                t: this.shape_24
            }]
        }, 1).to({
            state: [{
                t: this.shape_25
            }]
        }, 1).to({
            state: [{
                t: this.shape_26
            }]
        }, 1).to({
            state: [{
                t: this.shape_27
            }]
        }, 1).to({
            state: [{
                t: this.shape_28
            }]
        }, 1).to({
            state: [{
                t: this.shape_29
            }]
        }, 1).to({
            state: [{
                t: this.shape_30
            }]
        }, 1).to({
            state: [{
                t: this.shape_31
            }]
        }, 1).to({
            state: [{
                t: this.shape_32
            }]
        }, 1).to({
            state: [{
                t: this.shape_33
            }]
        }, 1).to({
            state: [{
                t: this.shape_34
            }]
        }, 1).to({
            state: [{
                t: this.shape_35
            }]
        }, 1).to({
            state: [{
                t: this.shape_36
            }]
        }, 1).to({
            state: [{
                t: this.shape_37
            }]
        }, 1).to({
            state: [{
                t: this.shape_38
            }]
        }, 1).to({
            state: [{
                t: this.shape_39
            }]
        }, 1).to({
            state: [{
                t: this.shape_40
            }]
        }, 1).wait(2));

        // gotas blancas
        this.shape_41 = new cjs.Shape();
        this.shape_41.graphics.f("#FFFFFF").s().p("AiYT9QgPgZgBgXQgCgYAVgqIAjhGIAhBDQATAmAAAgQAAAggOASQgOASgXACIgFAAQgVAAgNgXgABQT5QgPgZgCgYQgBgXAVgqIAihHIAiBEQATAmAAAgQAAAggPASQgNASgYABIgDABQgWAAgNgXgAiYP2QgPgagBgXQgCgXAVgqIAjhHIAhBEQATAmAAAgQAAAggOASQgOARgXACIgFABQgVAAgNgXgABQPxQgPgZgCgXQgBgXAVgqIAihHIAiBDQATAmAAAgQAAAhgPASQgNARgYACIgEAAQgVAAgNgXgAiYLuQgPgZgBgXQgCgXAVgrIAjhHIAhBEQATAmAAAgQAAAggOASQgOASgXABIgFABQgVAAgNgXgABQLqQgPgZgCgXQgBgYAVgqIAihHIAiBEQATAmAAAgQAAAggPASQgNARgYACIgEABQgVAAgNgXgAiYHnQgPgZgBgYQgCgXAVgqIAjhHIAhBEQATAmAAAgQAAAggOASQgOASgXABIgEABQgWAAgNgXgABQHjQgPgZgCgYQgBgXAVgrIAihGIAiBEQATAlAAAgQAAAggPASQgNASgYACIgEAAQgVAAgNgWgAiYDfQgPgZgBgXQgCgXAVgrIAjhGIAhBDQATAmAAAgQAAAggOATQgOARgXACIgFAAQgVAAgNgXgABQDbQgPgZgCgXQgBgYAVgqIAihHIAiBEQATAmAAAgQAAAggPASQgNASgYACIgDAAQgWAAgNgXgAiYg4QgPgZgBgXQgCgYAVgqIAjhHIAhBEQATAmAAAgQAAAggOASQgOASgXABIgEABQgWAAgNgXgABLg8QgPgZgCgXQgBgXAVgrIAihGIAiBEQATAlAAAgQAAAggPASQgNASgYACIgEAAQgVAAgNgXgAiYlAQgPgZgBgXQgCgXAVgqIAjhHIAhBDQATAmAAAhQAAAggOASQgOARgXACIgFAAQgVAAgNgXgABLlEQgPgZgCgXQgBgYAVgqIAihHIAiBEQATAmAAAgQAAAggPASQgNASgYACIgDAAQgWAAgNgXgAiYpHQgPgZgBgXQgCgXAVgrIAjhHIAhBEQATAmAAAgQAAAggOASQgOARgXACIgFABQgVAAgNgXgABLpMQgPgZgCgXQgBgYAVgqIAihGIAiBDQATAmAAAgQAAAggPASQgNASgYACIgEAAQgVAAgNgXgABLtMQgPgZgCgWQgBgYAVgqIAihHIAiBEQATAlAAAhQAAAggPASQgNARgYACIgEABQgVAAgNgYgAiYtOQgPgZgBgYQgCgXAVgrIAjhGIAhBEQATAlAAAgQAAAggOASQgOASgXACIgFAAQgVAAgNgWgAiYxWQgPgZgBgXQgCgYAVgqIAjhHIAhBEQATAmAAAgQAAAggOASQgOASgXACIgEAAQgWAAgNgXgABMxaQgOgZgBgYQgCgXAVgrIAihGIAiBEQATAlAAAgQAAAggOASQgOASgYACIgEAAQgVAAgOgWg");
        this.shape_41.setTransform(-1.3, 147.6);

        this.timeline.addTween(cjs.Tween.get(this.shape_41).wait(22));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-18.2, -13.6, 33.9, 291.3);


    (lib.Symbol85 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#660066").s().p("ANJFaQhBgZg1g1Qg1gzgbhDQgahEAAhSQAAhRAahDQAbhDA1gzQA1g1BCgZQBCgbBOAAQBOAABBAbQBBAZA2A1QA1AzAbBEQAbBDAABQQAABSgbBEQgaBDg1AzQg2A1hBAZQhBAahPAAQhPAAhCgagAOKjFQgkAPgbAcQgbAdgOAnQgNAnAAAvQAABeA2A6QAbAdAkAPQAkAPAsAAQAsAAAkgPQAjgPAbgdQAbgdAOgmQAOgmAAgvQAAgvgOgnQgOgngbgdQgbgcgjgPQgkgOgsAAQgsAAgkAOgEArGAFUQgZgZAAglQAAglAZgYQAYgYAmgBQAkABAZAYQAYAYABAlQgBAlgYAZQgZAagkAAQgmAAgYgagEgjUAFnQgWAAgPgLQgQgMgKgPQgKgRgEgQIhokTIhqETQgHARgJAQQgLARgRALQgQALgbgBQgXAAgPgLQgPgLgJgQQgKgQgFgRIi6oKQgPgxANgeQANgcAjgMQAhgMAdAPQAdAQAQAuIB0FlIBokWIAMgcQAGgMAFgFQALgNAPgGQAOgHASgBQAJABAIABQAJABAIAFQARAEAKANQALANALAiIBoEWIB0llQAQguAcgQQAdgPAiAMQAiAMANAcQANAegOAxIi6IKIgPAhQgKARgQALQgQALgaAAIgEgBgAdoFaQgXgOgTgcIj1lfIAFEwQgBAzgWAXQgWAYgkAAQglAAgWgYQgWgXAAgzIAAoaQAAgmAVgVQAUgUAngBQAZABAXAOQAWANAUAbID2FnIgFk2QAAg0AWgYQAXgXAkABQAkgBAWAXQAWAYABA0IAAIZQAAAlgVAWQgVAUgmAAQgaABgXgOgEAhwAFVQgTgOABgpIAAo+QgBgpATgOQASgNAqABIFJAAQAlgBAUAUQAVASAAAlQAAAlgVASQgUAUglgBIj1AAIAACCIDeAAQAlgBAUAUQAUASABAmQgBAjgUATQgUAUglgBIjeAAIAACGID+AAQAlABAUASQAUATABAkQgBAlgUAUQgUATglAAIlSAAIgGAAQglAAgRgOgAgSFVQgUgOAAgpIAAo+QAAgpAUgOQAUgNAlABIB8AAQBaAABFAYQBFAZAvAzQBeBkAFClQAABLgWA+QgXA+guAxQguAwhLAYQhLAZhnAAIhsAAIgFAAQgiAAgSgOgAB7DMIAqAAQBrgBAzgxQAzgwAAheQAAhrgyg4Qgzg3hpgBIgtAAgA9dFVQgTgOABgpIAAo+QgBgpATgOQASgNAqABIFJAAQAlgBAUAUQAVASAAAlQAAAlgVASQgUAUglgBIj1AAIAACCIDeAAQAlgBAUAUQAUASABAmQgBAjgUATQgUAUglgBIjeAAIAACGID+AAQAlABAUASQAUATABAkQgBAlgUAUQgUATglAAIlSAAIgGAAQglAAgRgOgAsQFLQgXgXABgzIAAoBQAAg0AWgYQAWgXAlABQAkgBAWAXQAWAYABA0IAAHNICvAAQAmABAUASQAUATABAkQgBAlgUAUQgUATgmAAIjwAAIgCAAQgyAAgXgYgA0IFLQgXgXABgzIAAoBQAAg0AWgYQAWgXAlABQAkgBAWAXQAWAYABA0IAAHNICvAAQAmABAUASQAUATABAkQgBAlgUAUQgUATgmAAIjwAAIgCAAQgyAAgXgYgEAsDACWQglAAgWgYQgWgXAAg0IAAk/QAAgzAWgYQAWgXAlABQAjgBAXAXQAWAYABAzIAAE/QgBA0gWAXQgWAYgjAAIgBAAg");
        this.shape.setTransform(0, 37.2);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.Symbol85, new cjs.Rectangle(-290.6, 0, 581.2, 74.3), null);


    (lib.Symbol39 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("AhJAxQgGgFgCgJQgDgKAEgHQACgHAHgBQAGgCAGAFQAFAFACAKQADAIgDAIQgDAHgGACIgDAAQgFAAgEgEgAA9gMQgGgGgCgIQgCgKACgHQADgHAGgCQAGgBAGAFQAGAGADAJQACAIgDAIQgDAHgGACIgCAAQgFAAgFgEg");
        this.shape.setTransform(8.3, 5.3);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#000000").s().p("AhRAkIgBgEIADABQALAAAOgMIADAIIAAAEIgFACQgPAFgHAFQgCgEgBgFgAA1gZQAHgEAKgJIAHgGQAEAFACAGIgIAFIgRAOQgDgEgCgHg");
        this.shape_1.setTransform(8.3, 5.2);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_1
            }]
        }, 61).to({
            state: [{
                t: this.shape
            }]
        }, 4).to({
            state: [{
                t: this.shape
            }]
        }, 40).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 16.7, 10.7);


    (lib.Symbol38 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("AgDA6QgegFgkgSIgegTQAzAABOgkQApgUAdgTQgGB3hPAAIgSgCg");
        this.shape.setTransform(10, 6);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#000000").s().p("AgDA4QgPgDgRgGQgQgGgQgJIgdgTQAYgBAdgIQAXgGAagKIAYgKIAogTIAbgQQgBAUgDARQgFAfgOATQgQAWgaAEQgIACgJAAIgSgCg");
        this.shape_1.setTransform(10.2, 6.2);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#000000").s().p("AgEA2QgPgDgPgHQgQgGgQgKIgbgSQAWgDAdgHIAwgQIAXgJIAmgQIAbgOQgBAUgCAQQgGAegNASQgQAWgaAEIgOABQgKAAgKgCg");
        this.shape_2.setTransform(10.3, 6.5);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#000000").s().p("AgFA0QgOgEgPgGQgPgHgPgJIgagTQAVgEAcgHIAvgPIAWgIIAlgOIAagMQAAATgDAQQgFAegNASQgQAUgaADIgMABQgKAAgLgCg");
        this.shape_3.setTransform(10.5, 6.8);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#000000").s().p("AgGAxQgOgEgOgGQgPgHgPgKIgXgTQAUgDAbgJIAtgOIAWgGIAkgMIAZgKQAAASgDAQQgFAdgNARQgQAUgZACIgJABQgMAAgLgDg");
        this.shape_4.setTransform(10.7, 7.1);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#000000").s().p("AgHAvQgNgEgOgHQgOgHgOgKIgWgTIAsgNQAVgHAYgGIAWgFIAjgKIAXgIQAAASgCAQQgFAcgOARQgPATgZABIgHAAQgMAAgMgDg");
        this.shape_5.setTransform(10.9, 7.3);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#000000").s().p("AgIAsQgNgEgNgHQgNgHgOgKIgUgTIAqgPQAUgHAYgFIAVgEIAhgHIAXgGQAAARgCAQQgFAbgNAQQgQATgYAAIgEAAQgNAAgNgEg");
        this.shape_6.setTransform(11.1, 7.6);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#000000").s().p("AgIAqQgNgFgNgHQgMgIgNgKIgTgSQAQgIAYgIQAUgHAXgEIAUgDIAhgGIAVgEQABASgCAPQgFAbgNAPQgQASgXgBIgDABQgNAAgNgFg");
        this.shape_7.setTransform(11.2, 7.9);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#000000").s().p("AATAsQgOAAgOgFQgMgEgMgIQgMgIgMgKIgSgTQAPgJAXgIQATgHAXgDIAUgCQARgCAOgBIAUgCQABARgCAOQgEAbgNAPQgPAQgUAAIgEgBg");
        this.shape_8.setTransform(11.4, 8.2);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#000000").s().p("AARArQgNAAgOgGQgLgFgMgIQgMgIgLgKIgQgTQANgKAXgIQASgHAXgCIATgBQARgBANAAIATAAQABAQgCAPQgDAagOAOQgNAOgTAAIgGAAg");
        this.shape_9.setTransform(11.6, 8.5);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#000000").s().p("AAPArQgNgBgNgGQgLgFgLgIQgLgJgKgKIgQgTQAMgLAXgIQASgHAVgBIATAAQAQAAANACIASABQABAQgBAOQgEAagNANQgNANgTAAIgGAAg");
        this.shape_10.setTransform(11.8, 8.6);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#000000").s().p("AANArQgNgBgMgGQgLgGgKgIQgLgIgJgLQgIgJgGgKQALgMAVgIQASgIAVABIASABQAPABANADIARADQABAQgBAOQgDAZgOANQgMALgQAAIgJgBg");
        this.shape_11.setTransform(12, 8.7);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#000000").s().p("AALAsQgLgBgNgHQgKgFgKgJQgKgJgIgKQgIgJgFgLQAKgNAUgIQARgHAVABIASADQAOABAMAFIAQAFQACAPgCANQgCAZgOAMQgLAKgPAAIgLgBg");
        this.shape_12.setTransform(12.1, 8.7);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#000000").s().p("AAJAtQgLgCgMgHQgJgGgKgIQgJgKgIgKQgHgJgEgLQAIgOAUgIQAQgHAVACIARAEQAOACALAGQAJADAGAEQACAPgBAMQgDAZgNAMQgLAIgNAAQgGAAgHgBg");
        this.shape_13.setTransform(12.3, 8.7);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#000000").s().p("AAHAuQgKgCgMgHQgJgHgJgIQgJgKgHgKQgGgKgDgKQAHgPATgJQAQgHATADIARAFQANAEALAHQAIAEAGAFQACAOgBAMQgCAYgOALQgKAIgMAAQgHAAgHgCg");
        this.shape_14.setTransform(12.5, 8.7);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#000000").s().p("AAFAvQgKgDgLgHQgJgHgIgJQgIgKgGgKQgGgKgDgKQAGgRASgIQAQgHATAEIAQAGQANAFAKAIQAHAFAFAGQADAOgBALQgCAYgOALQgIAGgMAAQgHAAgIgCg");
        this.shape_15.setTransform(12.7, 8.8);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#000000").s().p("AADAwQgKgDgKgIQgIgHgIgJQgIgKgFgLQgFgJgCgLQAFgRARgIQAPgIATAGIAPAHQAMAFAKAKQAHAGAEAHQADAMgBAMQgCAYgNAJQgIAGgKAAQgIAAgJgDg");
        this.shape_16.setTransform(12.9, 8.8);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#000000").s().p("AACAwQgKgDgJgIQgIgHgIgKQgHgKgEgKQgFgKgBgLQAEgSAQgIQAOgIATAHIAPAIQALAGAJALQAHAHAEAIQADALgBAMQgCAYgNAJQgIAFgJAAQgIAAgJgFg");
        this.shape_17.setTransform(13.1, 8.8);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#000000").s().p("AAAAyQgKgEgJgJQgIgHgGgKQgHgKgEgKQgDgLAAgLQACgTAPgIQAOgIASAIQAIAEAHAFQAKAIAIAMQAGAIAEAJQADALAAALQgCAXgNAIQgHAEgIAAQgJAAgJgEg");
        this.shape_18.setTransform(13.3, 8.8);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#000000").s().p("AgBAyQgTgJgNgVQgMgVABgWQABgUAOgIQAOgIARAJQATAKANAWQAMAUgBAVQgBAWgNAIQgHADgHAAQgJAAgJgGg");
        this.shape_19.setTransform(13.5, 8.9);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#000000").s().p("AAHAuQgLgDgLgHQgJgGgJgJQgJgJgGgLQgGgJgEgLQAHgPATgIQAQgIATAEIARAFQANAEAKAHIAOAKQACANgBAMQgCAZgOALQgJAHgMAAQgHAAgHgCg");
        this.shape_20.setTransform(12.6, 8.8);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#000000").s().p("AAQArQgNgBgNgGQgMgFgLgIQgLgIgLgKQgJgJgHgKQANgKAWgJQATgHAWgBIATAAQAQgBANABIATABQABAQgCAOQgDAagOAOQgNANgTAAIgGAAg");
        this.shape_21.setTransform(11.7, 8.6);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f("#000000").s().p("AgHAvQgNgDgOgHIgcgRIgXgTIAtgNQAVgHAYgGIAWgGIAjgKIAYgJQAAATgDAPQgEAdgOAQQgPAUgZABIgIABQgMAAgMgEg");
        this.shape_22.setTransform(10.8, 7.3);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_1
            }]
        }, 1).to({
            state: [{
                t: this.shape_2
            }]
        }, 1).to({
            state: [{
                t: this.shape_3
            }]
        }, 1).to({
            state: [{
                t: this.shape_4
            }]
        }, 1).to({
            state: [{
                t: this.shape_5
            }]
        }, 1).to({
            state: [{
                t: this.shape_6
            }]
        }, 1).to({
            state: [{
                t: this.shape_7
            }]
        }, 1).to({
            state: [{
                t: this.shape_8
            }]
        }, 1).to({
            state: [{
                t: this.shape_9
            }]
        }, 1).to({
            state: [{
                t: this.shape_10
            }]
        }, 1).to({
            state: [{
                t: this.shape_11
            }]
        }, 1).to({
            state: [{
                t: this.shape_12
            }]
        }, 1).to({
            state: [{
                t: this.shape_13
            }]
        }, 1).to({
            state: [{
                t: this.shape_14
            }]
        }, 1).to({
            state: [{
                t: this.shape_15
            }]
        }, 1).to({
            state: [{
                t: this.shape_16
            }]
        }, 1).to({
            state: [{
                t: this.shape_17
            }]
        }, 1).to({
            state: [{
                t: this.shape_18
            }]
        }, 1).to({
            state: [{
                t: this.shape_19
            }]
        }, 1).to({
            state: [{
                t: this.shape_19
            }]
        }, 52).to({
            state: [{
                t: this.shape_20
            }]
        }, 1).to({
            state: [{
                t: this.shape_21
            }]
        }, 1).to({
            state: [{
                t: this.shape_22
            }]
        }, 1).to({
            state: [{
                t: this.shape
            }]
        }, 1).wait(48));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 20, 12);


    (lib.sonidogota = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            plop: 1
        });

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }
        this.frame_1 = function() {
            playSound("Plopp");
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(6));

        // Capa 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#CC0000").s().p("AilCmIAAlLIFLAAIAAFLg");

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#999900").s().p("AilCmIAAlLIFLAAIAAFLg");

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_1
            }]
        }, 1).wait(6));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-16.6, -16.6, 33.2, 33.2);


    (lib.play_btn = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Capa 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#CC3300").s().p("AmTBqQgKgCgJgGQgJgFgFgFQgEgHAAgGQAAgKAGgGQAHgHALAAIAHACIAJAEIAMAFIAKABQANAAAHgGQAHgGgBgIQAAgGgBgEQgCgFgEgDIgKgFIgQgHQgagJgNgNQgOgQAAgWQAAgOAFgMQAFgKAJgJQAVgRAeABQAZgBAOAIQAOAJAAAOQAAAKgFAGQgFAGgLgBQgFABgIgFQgDgDgFgBQgFgBgFAAQgLAAgFAFQgHAFAAAJQAAAOAcAKQAQAGALAGQAMAHAHAGQAGAHAEAJQAEAKAAAMQgBAQgFAMQgGAMgKAJQgLAJgNAFQgOAEgRAAQgNAAgLgCgAGOBiQgHgHAAgKQAAgLAIgHQAGgIALAAQAKAAAIAIQAHAHAAAKQAAALgHAHQgIAHgKABQgMAAgGgIgAALBkQgGgGgEgLIgFgTIhPAAIgGAUQgEALgFAFIgHAFQgDABgEAAQgLAAgHgHQgHgHgBgJIACgHIABgGIA4iQQAMgdAZAAQANgBAJAHQAJAHAEAOIA1CQIACAKIACAFQgBALgGAGQgHAFgKABQgJAAgGgGgAhFAWIA0ABIgahFgAjZBnQgLgBgHgGQgFgHgBgPIABiFIgdAAQgLAAgGgGQgGgFAAgLQAAgKAGgGQAGgGALABIBoAAQAKAAAGAFQAFAFACALQgBALgGAFQgGAFgLABIgcAAIABCFQgCAPgGAHQgGAHgJAAIgBAAgAEYBgQgGgHAAgPIAAiFIgdAAQgLgBgFgFQgHgFABgLQAAgLAGgEQAFgGAMAAIBngBQALABAGAFQAFAGABAKQAAALgHAFQgFAGgLgBIgcABIAACGQgBAOgGAHQgGAHgLAAQgKgBgHgGgABLBhQgGgIAAgPIAAidQAAgMAGgDQAFgFALABIApAAQAlAAAUARQAUARAAAeQAAAMgDALQgDAKgHAIQgFAHgHAFQgHAFgHACIAdAkIAHAJQADAGAAAIQgBAJgFAGQgGAGgJAAQgHAAgFgDQgGgCgFgHIgxhCIAAAyQgBAPgGAHQgGAHgLAAQgKgBgHgFgAB0gMIAQAAQAOAAAIgGQAHgGABgLQgBgLgHgHQgIgGgOAAIgQAAgAGPAkQgHgHAAgOIAAhcQABgPAGgHQAGgHALAAQAKAAAHAHQAGAGAAAQIAABbQAAAPgHAHQgGAHgLAAQgKAAgGgHg");
        this.shape.setTransform(58, 52.6);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#CC3300").s().p("Aheh5IC9B5Ii9B6g");
        this.shape_1.setTransform(58.7, 82.9);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FFCC00").s().p("Aj/G9Qi5hrg3jNQg3jMBqi5QBri4DNg3QDNg3C4BqQC4BrA4DNQA2DNhqC4QhqC4jOA3QhGAThDAAQiDAAh4hGg");
        this.shape_2.setTransform(58.9, 58.9);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#CC3300").s().p("AklH9QjTh6g/jrQg/jqB6jTQB6jTDrg/QDqg/DSB6QDTB6A/DrQA/Dqh5DTQh6DSjrA/QhQAWhNAAQiVAAiLhQg");
        this.shape_3.setTransform(58.9, 58.9);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#CC3300").s().p("AEuC8QgKgDgFgJQgFgIADgKQACgLAJgFQAIgEALACQAKADAFAJQAFAIgCAKQgEAKgIAGQgGADgGAAIgHgBgACvCXQgJgDgFgIQgFgIAEgOIAMgrIghhlQgFgOAEgIQADgJAJgEQAKgEAIAEQAJAEAFAOIAYBQIA9g5QAMgKAJABQAJABAGAIQAGAIgBAJQgBAJgLAJIhQBIIgLArQgEAOgIAFQgFADgGAAIgHgBgAE+CBQgKgDgEgIQgEgIADgPIAYhXQAEgNAIgGQAHgEAKADQAKACAFAIQAEAHgEAPIgXBXQgEAOgIAFQgFAEgHAAIgGgBgAFMA4IAAABIABgCIAAgBIgBACgAA9B7QgIgCgFgGQgEgIgBgLIgBgUIhJgUIgMARQgGAKgGAEQgEACgDAAIgHgBQgLgCgFgIQgGgJADgIIACgIIAEgFIBYh5QAUgaAYAHQAMADAGAJQAHAJABAOIAOCXIAAAJIgBAGQgDAJgHAEQgFADgFAAIgIgCgAgHAUIAvANIgGhHgAh9BGIhIgTQgNgDgDgFQgEgGADgKIApiWQADgOAJgEQAHgGAKAEQAKACAFAIQAEAIgEAOIgiB/IAxAMQAKADAEAHQAEAHgCAKQgDAKgHAEQgEACgFAAIgIgBgAliAJQgKgDgFgHQgFgIAEgOIAoiWQAEgMAHgCQAGgCAKACIAkAKQAYAGAOANQAPANAEARQAFARgGAVQgIAfgXANQgWAMgmgKIgOgDIgJAkQgEANgIAEQgFAEgGAAIgGgBgAkxhYIAOAEQAPAEAKgFQAJgEAEgNQADgNgFgKQgGgJgPgEIgOgEg");
        this.shape_4.setTransform(61.1, 48.9);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#CC3300").s().p("Eg4wAZoMAAAgzPMBxhAAAMAAAAzPg");
        this.shape_5.setTransform(252.3, -3.8);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape_4
            }]
        }, 1).to({
            state: [{
                t: this.shape_5
            }]
        }, 2).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 117.8, 117.8);


    (lib.macetainicio = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Capa 10 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("Ai2IbQAAgBgBAAQAAAAAAgBQAAAAAAAAQgBgBAAAAIiHnQIgPgRIgVgFIgDgCIgBgDIACiBQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAIDPgFQgegagdgfQhEhKAMghIAFgLQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAOgIAwAZIADgCQgLgYgGgdQgRhCAXgaIACgCIALgCIACAAQAQABATANQA4AoA4CKIAeAAQAehWAphTQBWisA4ASIAHAAIABAAQAJABAHAHQATATgLA7QgPBPgFASQgHAWgHANIASAAIABAAQAQAEACANQACAKgKASIhGByQggAwgQASIDuAAIADABIACABIAAADIgCB1QAAAAgBABQAAAAAAAAQAAABAAAAQgBABAAAAIgpAnIh9HIIgBADIgDABIgPACIgJAFIgCAAIlTADIgDgBg");
        mask.setTransform(0.4, 1.2);

        // maceta
        this.instance = new lib.Mapadebits5();
        this.instance.parent = this;
        this.instance.setTransform(-40, -56);

        this.shape = new cjs.Shape();
        this.shape.graphics.f("#CC0000").s().p("Ai2IbQAAgBgBAAQAAAAAAgBQAAAAAAAAQgBgBAAAAIiHnQIgPgRIgVgFIgDgCIgBgDIACiBQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAIDPgFQgegagdgfQhEhKAMghIAFgLQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAOgIAwAZIADgCQgLgYgGgdQgRhCAXgaIACgCIALgCIACAAQAQABATANQA4AoA4CKIAeAAQAehWAphTQBWisA4ASIAHAAIABAAQAJABAHAHQATATgLA7QgPBPgFASQgHAWgHANIASAAIABAAQAQAEACANQACAKgKASIhGByQggAwgQASIDuAAIADABIACABIAAADIgCB1QAAAAgBABQAAAAAAAAQAAABAAAAQgBABAAAAIgpAnIh9HIIgBADIgDABIgPACIgJAFIgCAAIlTADIgDgBg");
        this.shape.setTransform(0.4, 1.2);

        var maskedShapeInstanceList = [this.instance, this.shape];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape
            }, {
                t: this.instance
            }]
        }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.macetainicio, new cjs.Rectangle(-35.6, -52.7, 72, 107.9), null);


    (lib.gotauniversalmapadebits = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Mapadebits1();
        this.instance.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.gotauniversalmapadebits, new cjs.Rectangle(0, 0, 18, 36), null);


    (lib.gotainiciomc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // gota
        this.instance = new lib.Mapadebits1();
        this.instance.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.gotainiciomc, new cjs.Rectangle(0, 0, 18, 36), null);


    (lib.btn_menu = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Capa 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#009999").s().p("ACAArQgMgIAAgSIAAhDIAgAAIAABAQAAAHADADQADADAGAAQAGAAADgCQAEgCABgDIAAgMIAAg6IAZAAIAABBQAAATgMAJQgLAIgSAAQgTAAgLgIgABLAxIgbgsQgGgHgFgNQACAKAAAGIAAAwIgZAAIAAhjIAdAAIAYAlQAHALADAHQgCgMAAgNIAAgeIAZAAIAABjgAhIAxIAAhjIBKAAIAAAXIgsAAIAAAPIAlAAIAAAVIglAAIAAAQIAsAAIAAAYgAh1AxIAAhGIgTBGIgTAAIgUhGIAABGIgXAAIAAhjIApAAIAOA0IAOg0IAoAAIAABjg");
        this.shape.setTransform(43.3, 9.9);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("AkMBcIhRhSQgKgKAKgKIBRhRQAGgFAGABIABAAIAABDQAFgCAGAAIAwAAIABAAIAAgSQABgvAxAAIHCAAQAyAAAAAyIAABbQAAAygyAAInCAAQgwAAgCgvIAAgSIgBAAIgwAAQgGAAgFgCIAABDIgBAAIgBAAQgGAAgFgEg");
        this.shape_1.setTransform(35.5, 9.6);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#333333").s().p("ACAArQgMgIAAgSIAAhDIAgAAIAABAQAAAHADADQADADAGAAQAGAAADgCQAEgCABgDIAAgMIAAg6IAZAAIAABBQAAATgMAJQgLAIgSAAQgTAAgLgIgABLAxIgbgsQgGgHgFgNQACAKAAAGIAAAwIgZAAIAAhjIAdAAIAYAlQAHALADAHQgCgMAAgNIAAgeIAZAAIAABjgAhIAxIAAhjIBKAAIAAAXIgsAAIAAAPIAlAAIAAAVIglAAIAAAQIAsAAIAAAYgAh1AxIAAhGIgTBGIgTAAIgUhGIAABGIgXAAIAAhjIApAAIAOA0IAOg0IAoAAIAABjg");
        this.shape_2.setTransform(43.3, 9.9);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FFFFFF").s().p("AgXAfQgNAAgJgJQgJgJAAgNQAAgMAJgJQAJgJANAAIAvAAQANAAAJAJQAJAJAAAMQAAANgJAJQgJAJgNAAg");
        this.shape_3.setTransform(13.4, 9.6);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AAlBcIhQhSQgLgKALgKIBQhRQAFgFAGABIABAAIAAC/IgBAAIgBAAQgFAAgFgEg");
        this.shape_4.setTransform(5, 9.6);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#FFFFFF").s().p("AjgBgQgxAAgBgvIAAhhQABgvAxAAIHBAAQAyAAAAAyIAABbQAAAygyAAg");
        this.shape_5.setTransform(43.5, 9.6);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#009999").s().p("ApDC0IAAlnISHAAIAAFng");
        this.shape_6.setTransform(49.5, 10.6);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }]
        }, 1).to({
            state: [{
                t: this.shape_6
            }]
        }, 2).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 71, 19.3);


    (lib.box = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Capa 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("AkhEiIAApDIJDAAIAAJDg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.box, new cjs.Rectangle(-28.9, -29, 58, 58), null);


    (lib.Symbol32 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_23 = function() {
            playSound("aplauso2");
            this.parent.macetabien.gotoAndPlay("largada");
        }
        this.frame_202 = function() {
            this.stop();
            this.parent.playagain_btn.visible = true;
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(179).call(this.frame_202).wait(1));

        // Layer 13
        this.instance = new lib.Symbol85();
        this.instance.parent = this;
        this.instance.setTransform(0, 51.6, 2.697, 2.697);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            scaleX: 1,
            scaleY: 1,
            x: -91.2,
            y: 334.6
        }, 69, cjs.Ease.get(1)).wait(134));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-783.7, 51.6, 1567.4, 200.4);


    (lib.salpicada = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_19 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

        // Layer 3
        this.instance = new lib.gotauniversalmapadebits();
        this.instance.parent = this;
        this.instance.setTransform(-9, 8.9, 0.43, 0.43, 0, 180, 0, 6.6, 17.3);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            regX: 6.7,
            regY: 17.2,
            skewX: 165,
            skewY: -15,
            guide: {
                path: [-8.9, 8.8, -7.2, 0.8, -6.2, -8.1, -4.7, -23.7, -7.2, -29.4]
            }
        }, 19).wait(1));

        // Layer 4
        this.instance_1 = new lib.gotauniversalmapadebits();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-11.3, 7.5, 0.43, 0.43, 0, 135, -45, 6.5, 17.3);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({
            regX: 6.7,
            regY: 17.4,
            skewX: 105,
            skewY: -75,
            guide: {
                path: [-11.3, 7.5, -15.5, 1.3, -20.9, -5, -30.9, -16.3, -37.4, -17.8]
            }
        }, 19).wait(1));

        // Layer 5
        this.instance_2 = new lib.gotauniversalmapadebits();
        this.instance_2.parent = this;
        this.instance_2.setTransform(-11, 13.9, 0.43, 0.43, 0, 120, -60, 6.5, 17.2);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).to({
            regX: 6.7,
            skewX: 45,
            skewY: -135,
            guide: {
                path: [-11.1, 13.8, -14.9, 9.5, -20.9, 7, -34, 1.4, -48.2, 12.3]
            }
        }, 19).wait(1));

        // Layer 2
        this.instance_3 = new lib.gotauniversalmapadebits();
        this.instance_3.parent = this;
        this.instance_3.setTransform(-7.3, 12.3, 0.43, 0.43, -165, 0, 0, 6.5, 17.3);

        this.timeline.addTween(cjs.Tween.get(this.instance_3).to({
            regY: 17.4,
            rotation: -75,
            guide: {
                path: [-7.3, 12.3, -5.8, 4.6, -1.1, -2.5, 8.7, -17.2, 25.8, -13.8]
            }
        }, 19).wait(1));

        // Layer 1
        this.instance_4 = new lib.gotauniversalmapadebits();
        this.instance_4.parent = this;
        this.instance_4.setTransform(-5.2, 14.1, 0.43, 0.43, -135, 0, 0, 6.5, 17.3);

        this.timeline.addTween(cjs.Tween.get(this.instance_4).to({
            regX: 6.6,
            rotation: -60,
            guide: {
                path: [-5.1, 14.1, -1.1, 7.6, 6.2, 3.4, 20.3, -5, 35.9, 5.1]
            }
        }, 19).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-19.4, -1.7, 21.9, 23.1);


    (lib.macetamovilcentro = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // dot1
        this.dot1 = new lib.box();
        this.dot1.name = "dot1";
        this.dot1.parent = this;
        this.dot1.setTransform(0.2, -20, 1.414, 0.696);
        this.dot1.alpha = 0.012;

        this.timeline.addTween(cjs.Tween.get(this.dot1).wait(1));

        // mask (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("Ai2IbQAAgBgBAAQAAAAAAgBQAAAAAAAAQgBgBAAAAIiHnQIgPgRIgVgFIgDgCIgBgDIACiBQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAIDPgFQgegagdgfQhEhKAMghIAFgLQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAOgIAwAZIADgCQgLgYgGgdQgRhCAXgaIACgCIALgCIACAAQAQABATANQA4AoA4CKIAeAAQAehWAphTQBWisA4ASIAHAAIABAAQAJABAHAHQATATgLA7QgPBPgFASQgHAWgHANIASAAIABAAQAQAEACANQACAKgKASIhGByQggAwgQASIDuAAIADABIACABIAAADIgCB1QAAAAgBABQAAAAAAAAQAAABAAAAQgBABAAAAIgpAnIh9HIIgBADIgDABIgPACIgJAFIgCAAIlTADIgDgBg");
        mask.setTransform(0.4, 0.8);

        // maceta
        this.dot1_1 = new lib.box();
        this.dot1_1.name = "dot1_1";
        this.dot1_1.parent = this;
        this.dot1_1.setTransform(-1.7, -20.3, 1.166, 0.447, 0, 0, 0, 0.1, 0);
        this.dot1_1.alpha = 0.012;

        this.instance = new lib.Mapadebits5();
        this.instance.parent = this;
        this.instance.setTransform(-40, -56);

        var maskedShapeInstanceList = [this.dot1_1, this.instance];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }, {
                t: this.dot1_1
            }]
        }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.macetamovilcentro, new cjs.Rectangle(-40.8, -53.1, 81.9, 107.9), null);


    (lib.macetabien = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            largada: 1
        });

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }
        this.frame_1 = function() {
            playSound("_16_fiu");
        }
        this.frame_26 = function() {
            playSound("Plopp");
        }
        this.frame_33 = function() {
            playSound("Plopp");
        }
        this.frame_42 = function() {
            playSound("Plopp");
        }
        this.frame_48 = function() {
            playSound("estrellita_jua");
        }
        this.frame_72 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(25).call(this.frame_26).wait(7).call(this.frame_33).wait(9).call(this.frame_42).wait(6).call(this.frame_48).wait(24).call(this.frame_72).wait(1));

        // sonrisa
        this.instance = new lib.Symbol39();
        this.instance.parent = this;
        this.instance.setTransform(-43.7, -137.9, 0.951, 0.951, 0, 0, 0, 8.3, 5.3);

        this.instance_1 = new lib.Symbol38();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-41.8, -126.3, 0.951, 0.951, 0, 0, 0, 9.9, 6);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }, 48).wait(25));

        // flor
        this.instance_2 = new lib.Mapadebits6();
        this.instance_2.parent = this;
        this.instance_2.setTransform(-83, -172);
        this.instance_2._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(42).to({
            _off: false
        }, 0).wait(31));

        // hoja2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#5D7A2E").s().p("AgrB+IAAgBQgKgGgXhJQgahWBEg2QAWgRAbgMIAZgIQBWBmhQBjQgbAgghAUQgTAKgHAAQgFAAACgGg");
        this.shape.setTransform(-6.3, -75.9);
        this.shape._off = true;

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(34).to({
            _off: false
        }, 0).wait(39));

        // hoja1
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#8CC63F").s().p("AhSA3QgWgRgTgYIgOgUQBNhvBzA1QAnARAcAcQAZAagNAAIgBAAQgEALhBApQgkAXgjAAQgmAAglgbg");
        this.shape_1.setTransform(-25.9, -58.6);
        this.shape_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(28).to({
            _off: false
        }, 0).wait(45));

        // tallo
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#8CC63F").s().p("ACeIsQgmjyhwk+QhBi6hTi9IAAAAIhHiaIAxgWIAFAKIBCCQQBUDABCC8QBzFHAmD6g");
        this.shape_2.setTransform(-19.6, -64);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#5D7A2E").s().p("ACqItQgmj6h0lHQhBi8hVjAIhCiQIAagMIBHCbIAAAAQBUC/BCC9QB0FIAmD6g");
        this.shape_3.setTransform(-15.3, -64.1);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.shape_3
            }, {
                t: this.shape_2
            }]
        }, 3).wait(70));

        // Capa 10 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("Ai2IbQAAgBgBAAQAAAAAAgBQAAAAAAAAQgBgBAAAAIiHnQIgPgRIgVgFIgDgCIgBgDIACiBQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAIDPgFQgegagdgfQhEhKAMghIAFgLQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAOgIAwAZIADgCQgLgYgGgdQgRhCAXgaIACgCIALgCIACAAQAQABATANQA4AoA4CKIAeAAQAehWAphTQBWisA4ASIAHAAIABAAQAJABAHAHQATATgLA7QgPBPgFASQgHAWgHANIASAAIABAAQAQAEACANQACAKgKASIhGByQggAwgQASIDuAAIADABIACABIAAADIgCB1QAAAAgBABQAAAAAAAAQAAABAAAAQgBABAAAAIgpAnIh9HIIgBADIgDABIgPACIgJAFIgCAAIlTADIgDgBg");
        mask.setTransform(0.4, 1.2);

        // maceta
        this.instance_3 = new lib.Mapadebits5();
        this.instance_3.parent = this;
        this.instance_3.setTransform(-40, -56);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#CC0000").s().p("Ai2IbQAAgBgBAAQAAAAAAgBQAAAAAAAAQgBgBAAAAIiHnQIgPgRIgVgFIgDgCIgBgDIACiBQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAIDPgFQgegagdgfQhEhKAMghIAFgLQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAOgIAwAZIADgCQgLgYgGgdQgRhCAXgaIACgCIALgCIACAAQAQABATANQA4AoA4CKIAeAAQAehWAphTQBWisA4ASIAHAAIABAAQAJABAHAHQATATgLA7QgPBPgFASQgHAWgHANIASAAIABAAQAQAEACANQACAKgKASIhGByQggAwgQASIDuAAIADABIACABIAAADIgCB1QAAAAgBABQAAAAAAAAQAAABAAAAQgBABAAAAIgpAnIh9HIIgBADIgDABIgPACIgJAFIgCAAIlTADIgDgBg");
        this.shape_4.setTransform(0.4, 1.2);

        var maskedShapeInstanceList = [this.instance_3, this.shape_4];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_4
            }, {
                t: this.instance_3
            }]
        }).wait(73));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-35.6, -52.7, 72, 107.9);


    (lib.gotauniversalindividualmapadebits = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // box
        this.box = new lib.box();
        this.box.name = "box";
        this.box.parent = this;
        this.box.setTransform(9.6, 28);
        this.box.alpha = 0.012;

        this.timeline.addTween(cjs.Tween.get(this.box).wait(1));

        // gota
        this.instance = new lib.Mapadebits1();
        this.instance.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.gotauniversalindividualmapadebits, new cjs.Rectangle(-19.3, -1, 58, 58), null);


    (lib.gotainicio3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // salpicada
        this.instance = new lib.salpicada();
        this.instance.parent = this;
        this.instance.setTransform(22, 316.1, 1, 1, 0, 0, 0, 7.3, 7.3);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(103).to({
            _off: false
        }, 0).wait(21));

        // Layer 1
        this.gota = new lib.gotainiciomc();
        this.gota.name = "gota";
        this.gota.parent = this;
        this.gota.setTransform(6.5, 65.3, 1, 1, 0, 0, 0, 6.5, 17.3);

        this.timeline.addTween(cjs.Tween.get(this.gota).to({
            y: 317.6
        }, 103).to({
            _off: true
        }, 1).wait(20));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 48, 18, 36);


    (lib.gotainicio2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // salpicada
        this.instance = new lib.salpicada();
        this.instance.parent = this;
        this.instance.setTransform(22, 274.6, 1, 1, 0, 0, 0, 7.3, 7.3);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(116).to({
            _off: false
        }, 0).wait(21));

        // Layer 1
        this.gota = new lib.gotainiciomc();
        this.gota.name = "gota";
        this.gota.parent = this;
        this.gota.setTransform(6.5, -38.5, 1, 1, 0, 0, 0, 6.5, 17.3);

        this.timeline.addTween(cjs.Tween.get(this.gota).to({
            y: 272.2
        }, 116).to({
            _off: true
        }, 1).wait(20));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, -55.8, 18, 36);


    (lib.gotainicio1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // salpicada
        this.instance = new lib.salpicada();
        this.instance.parent = this;
        this.instance.setTransform(22, 312.6, 1, 1, 0, 0, 0, 7.3, 7.3);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(109).to({
            _off: false
        }, 0).wait(21));

        // Layer 1
        this.gota = new lib.gotainiciomc();
        this.gota.name = "gota";
        this.gota.parent = this;
        this.gota.setTransform(6.5, -110.7, 1, 1, 0, 0, 0, 6.5, 17.3);

        this.timeline.addTween(cjs.Tween.get(this.gota).to({
            y: 309.1
        }, 109).to({
            _off: true
        }, 1).wait(20));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, -128, 18, 36);


    (lib.gota9x = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // salpicada
        this.instance = new lib.salpicada();
        this.instance.parent = this;
        this.instance.setTransform(22, 303.6, 1, 1, 0, 0, 0, 7.3, 7.3);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(154).to({
            _off: false
        }, 0).wait(21));

        // Layer 1
        this.gota = new lib.gotauniversalindividualmapadebits();
        this.gota.name = "gota";
        this.gota.parent = this;
        this.gota.setTransform(6.5, -110.7, 1, 1, 0, 0, 0, 6.5, 17.3);

        this.timeline.addTween(cjs.Tween.get(this.gota).wait(30).to({
            y: 305.1
        }, 124).to({
            _off: true
        }, 1).wait(20));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-19.3, -129, 58, 58);


    (lib.gota8x = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // salpicada
        this.instance = new lib.salpicada();
        this.instance.parent = this;
        this.instance.setTransform(22, 316.1, 1, 1, 0, 0, 0, 7.3, 7.3);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(154).to({
            _off: false
        }, 0).wait(21));

        // Layer 1
        this.gota = new lib.gotauniversalindividualmapadebits();
        this.gota.name = "gota";
        this.gota.parent = this;
        this.gota.setTransform(6.5, -110.7, 1, 1, 0, 0, 0, 6.5, 17.3);

        this.timeline.addTween(cjs.Tween.get(this.gota).wait(30).to({
            y: 317.6
        }, 124).to({
            _off: true
        }, 1).wait(20));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-19.3, -129, 58, 58);


    (lib.gota7x = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // salpicada
        this.instance = new lib.salpicada();
        this.instance.parent = this;
        this.instance.setTransform(22, 274.6, 1, 1, 0, 0, 0, 7.3, 7.3);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(159).to({
            _off: false
        }, 0).wait(21));

        // Layer 1
        this.gota = new lib.gotauniversalindividualmapadebits();
        this.gota.name = "gota";
        this.gota.parent = this;
        this.gota.setTransform(6.5, -110.7, 1, 1, 0, 0, 0, 6.5, 17.3);

        this.timeline.addTween(cjs.Tween.get(this.gota).to({
            y: 272.2
        }, 159).to({
            _off: true
        }, 1).wait(20));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-19.3, -129, 58, 58);


    (lib.gota6x = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // salpicada
        this.instance = new lib.salpicada();
        this.instance.parent = this;
        this.instance.setTransform(22, 312.6, 1, 1, 0, 0, 0, 7.3, 7.3);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(197).to({
            _off: false
        }, 0).wait(21));

        // Layer 1
        this.gota = new lib.gotauniversalindividualmapadebits();
        this.gota.name = "gota";
        this.gota.parent = this;
        this.gota.setTransform(6.5, -110.7, 1, 1, 0, 0, 0, 6.5, 17.3);

        this.timeline.addTween(cjs.Tween.get(this.gota).wait(30).to({
            y: 309.1
        }, 167).to({
            _off: true
        }, 1).wait(20));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-19.3, -129, 58, 58);


    (lib.gota5x = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // salpicada
        this.instance = new lib.salpicada();
        this.instance.parent = this;
        this.instance.setTransform(22, 384.6, 1, 1, 0, 0, 0, 7.3, 7.3);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(194).to({
            _off: false
        }, 0).wait(21));

        // Layer 1
        this.gota = new lib.gotauniversalindividualmapadebits();
        this.gota.name = "gota";
        this.gota.parent = this;
        this.gota.setTransform(6.5, -110.7, 1, 1, 0, 0, 0, 6.5, 17.3);

        this.timeline.addTween(cjs.Tween.get(this.gota).wait(30).to({
            y: 382.8
        }, 164).to({
            _off: true
        }, 1).wait(20));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-19.3, -129, 58, 58);


    (lib.gota4x = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // salpicada
        this.instance = new lib.salpicada();
        this.instance.parent = this;
        this.instance.setTransform(22, 303.6, 1, 1, 0, 0, 0, 7.3, 7.3);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(159).to({
            _off: false
        }, 0).wait(21));

        // Layer 1
        this.gota = new lib.gotauniversalindividualmapadebits();
        this.gota.name = "gota";
        this.gota.parent = this;
        this.gota.setTransform(6.5, -110.7, 1, 1, 0, 0, 0, 6.5, 17.3);

        this.timeline.addTween(cjs.Tween.get(this.gota).to({
            y: 300.9
        }, 159).to({
            _off: true
        }, 1).wait(20));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-19.3, -129, 58, 58);


    (lib.gota3x = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // salpicada
        this.instance = new lib.salpicada();
        this.instance.parent = this;
        this.instance.setTransform(22, 267.6, 1, 1, 0, 0, 0, 7.3, 7.3);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(190).to({
            _off: false
        }, 0).wait(21));

        // Layer 1
        this.gota = new lib.gotauniversalindividualmapadebits();
        this.gota.name = "gota";
        this.gota.parent = this;
        this.gota.setTransform(6.5, -110.7, 1, 1, 0, 0, 0, 6.5, 17.3);

        this.timeline.addTween(cjs.Tween.get(this.gota).wait(30).to({
            y: 264.6
        }, 160).to({
            _off: true
        }, 1).wait(20));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-19.3, -129, 58, 58);


    (lib.gota2x = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // salpicada
        this.instance = new lib.salpicada();
        this.instance.parent = this;
        this.instance.setTransform(22, 329.6, 1, 1, 0, 0, 0, 7.3, 7.3);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(188).to({
            _off: false
        }, 0).wait(20));

        // gota
        this.gota = new lib.gotauniversalindividualmapadebits();
        this.gota.name = "gota";
        this.gota.parent = this;
        this.gota.setTransform(6.5, -110.7, 1, 1, 0, 0, 0, 6.5, 17.3);

        this.timeline.addTween(cjs.Tween.get(this.gota).wait(30).to({
            y: 323.9
        }, 158).to({
            _off: true
        }, 1).wait(19));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-19.3, -129, 58, 58);


    (lib.gota1x = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // salpicada
        this.instance = new lib.salpicada();
        this.instance.parent = this;
        this.instance.setTransform(22, 275.6, 1, 1, 0, 0, 0, 7.3, 7.3);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(138).to({
            _off: false
        }, 0).wait(20));

        // Layer 1
        this.gota = new lib.gotauniversalindividualmapadebits();
        this.gota.name = "gota";
        this.gota.parent = this;
        this.gota.setTransform(6.5, -110.7, 1, 1, 0, 0, 0, 6.5, 17.3);

        this.timeline.addTween(cjs.Tween.get(this.gota).to({
            y: 272.2
        }, 138).to({
            _off: true
        }, 1).wait(19));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-19.3, -129, 58, 58);


    // stage content:
    (lib._07movertouchmaceta = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            bien: 2,
            "bien": 2
        });

        // timeline functions:
        this.frame_0 = function() {
            this.stop();

            createjs.Touch.enable(stage);




            //this.caverman.cacheAsBitmap = true;
            // por si el navegador no es capaz de leer la extensión mp3
            createjs.Sound.alternateExtensions = ["ogg"];

            // BOTON PLAY
            this.play_btn.addEventListener("click", fl_MouseClickHandler.bind(this));

            function fl_MouseClickHandler() {


                this.gotoAndPlay("nextframe");
                //this.play_snd.play();
            }


            this.menu_btn.addEventListener("click", navega);

            function navega() {
                window.open("//www.freshteacher.software", "_parent");
            }
        }
        this.frame_1 = function() {
            this.stop();
            stage.canvas.style.cursor = "none";
            this.maceta.mouseEnabled = false;


            this.addEventListener("tick", fl_CustomMouseCursor.bind(this));



            function fl_CustomMouseCursor() {
                this.maceta.x = stage.mouseX / stage.scaleX;
            }


            this.on("tick", update.bind(this));



            function update(evt) {

                //GOTA 1
                var pt = this.maceta.localToLocal(this.maceta.dot1.x,
                    this.maceta.dot1.y, this.gota1.gota.box);

                if (this.gota1.gota.box.hitTest(pt.x, pt.y)) {
                    this.gota1.gotoAndPlay(0);
                    this.sonido.gotoAndPlay("gota");
                    //console.log("tocado"); 
                    this.tablero.gotoAndPlay("nextframe");
                }

                //GOTA 2
                var pt = this.maceta.localToLocal(this.maceta.dot1.x,
                    this.maceta.dot1.y, this.gota2.gota.box);

                if (this.gota2.gota.box.hitTest(pt.x, pt.y)) {
                    this.gota2.gotoAndPlay(0);
                    this.sonido.gotoAndPlay("gota");
                    //console.log("tocado"); 
                    this.tablero.gotoAndPlay("nextframe");
                }


                //GOTA 3
                var pt = this.maceta.localToLocal(this.maceta.dot1.x,
                    this.maceta.dot1.y, this.gota3.gota.box);

                if (this.gota3.gota.box.hitTest(pt.x, pt.y)) {
                    this.gota3.gotoAndPlay(0);
                    this.sonido.gotoAndPlay("gota");
                    //console.log("tocado"); 
                    this.tablero.gotoAndPlay("nextframe");
                }


                //GOTA 4
                var pt = this.maceta.localToLocal(this.maceta.dot1.x,
                    this.maceta.dot1.y, this.gota4.gota.box);

                if (this.gota4.gota.box.hitTest(pt.x, pt.y)) {
                    this.gota4.gotoAndPlay(0);
                    this.sonido.gotoAndPlay("gota");
                    //console.log("tocado"); 
                    this.tablero.gotoAndPlay("nextframe");
                }

                //GOTA 5
                var pt = this.maceta.localToLocal(this.maceta.dot1.x,
                    this.maceta.dot1.y, this.gota5.gota.box);

                if (this.gota5.gota.box.hitTest(pt.x, pt.y)) {
                    this.gota5.gotoAndPlay(0);
                    this.sonido.gotoAndPlay("gota");
                    //console.log("tocado"); 
                    this.tablero.gotoAndPlay("nextframe");
                }

                //GOTA 6
                var pt = this.maceta.localToLocal(this.maceta.dot1.x,
                    this.maceta.dot1.y, this.gota6.gota.box);

                if (this.gota6.gota.box.hitTest(pt.x, pt.y)) {
                    this.gota6.gotoAndPlay(0);
                    this.sonido.gotoAndPlay("gota");
                    //console.log("tocado"); 
                    this.tablero.gotoAndPlay("nextframe");
                }

                //GOTA 7
                var pt = this.maceta.localToLocal(this.maceta.dot1.x,
                    this.maceta.dot1.y, this.gota7.gota.box);

                if (this.gota7.gota.box.hitTest(pt.x, pt.y)) {
                    this.gota7.gotoAndPlay(0);
                    this.sonido.gotoAndPlay("gota");
                    //console.log("tocado"); 
                    this.tablero.gotoAndPlay("nextframe");
                }

                //GOTA 8
                var pt = this.maceta.localToLocal(this.maceta.dot1.x,
                    this.maceta.dot1.y, this.gota8.gota.box);

                if (this.gota8.gota.box.hitTest(pt.x, pt.y)) {
                    this.gota8.gotoAndPlay(0);
                    this.sonido.gotoAndPlay("gota");
                    //console.log("tocado"); 
                    this.tablero.gotoAndPlay("nextframe");
                }

                //GOTA 9
                var pt = this.maceta.localToLocal(this.maceta.dot1.x,
                    this.maceta.dot1.y, this.gota9.gota.box);

                if (this.gota9.gota.box.hitTest(pt.x, pt.y)) {
                    this.gota9.gotoAndPlay(0);
                    this.sonido.gotoAndPlay("gota");
                    //console.log("tocado"); 
                    this.tablero.gotoAndPlay("nextframe");
                }

                //CHEQUEO TODAS

                if (this.tablero.currentFrame == 20) {
                    //console.log("SACO MAUS"); 

                    this.removeEventListener("tick", fl_CustomMouseCursor.bind(this));
                    stage.canvas.style.cursor = "default";

                    this.removeEventListener("tick", update.bind(this));

                    this.gotoAndStop("bien");

                }


                //corchete fin funcion
            }
        }
        this.frame_2 = function() {
            this.stop();

            this.playagain_btn.visible = false;
            this.tablero.gotoAndStop(21);

            this.gota1.gotoAndStop(0);
            this.gota2.gotoAndStop(0);
            this.gota3.gotoAndStop(0);
            this.gota4.gotoAndStop(0);
            this.gota5.gotoAndStop(0);
            this.gota6.gotoAndStop(0);
            this.gota7.gotoAndStop(0);
            this.gota8.gotoAndStop(0);
            this.gota9.gotoAndStop(0);

            // BOTON OTRA VEZ
            this.playagain_btn.addEventListener("click", Chan.bind(this));

            function Chan() {
                this.tablero.gotoAndStop("cero");
                this.gotoAndStop(1);
                this.playagain_btn.visible = false;

                this.gota1.gotoAndPlay(0);
                this.gota2.gotoAndPlay(0);
                this.gota3.gotoAndPlay(0);
                this.gota4.gotoAndPlay(0);
                this.gota5.gotoAndPlay(0);
                this.gota6.gotoAndPlay(0);
                this.gota7.gotoAndPlay(0);
                this.gota8.gotoAndPlay(0);
                this.gota9.gotoAndPlay(0);
            }
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

        // marco
        this.shape = new cjs.Shape();
        // this.shape.graphics.f("#FFFFFF").s().p("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");
        this.shape.setTransform(360.8, 21);

        this.menu_btn = new lib.btn_menu();
        this.menu_btn.name = "menu_btn";
        this.menu_btn.parent = this;
        this.menu_btn.setTransform(52.1, 26.5, 1, 1, 0, 0, 0, 41.4, 17.4);
        new cjs.ButtonHelper(this.menu_btn, 0, 1, 2, false, new lib.btn_menu(), 3);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#009999").s().p("Eg5BAcrMAAAg5VMByDAAAMAAAA5VgEg2ZAYAQAiBvCtAAMBq+AAAMAAAgw5IveAAIAAADMhbcAAAIgDAwIg8AAIAHAlQg+gPhAAPQh9AegBCYMAAAAocIA4AEIAAA1IAqgGQgSA2ARA3g");
        this.shape_1.setTransform(365, 183.5);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.menu_btn
            }, {
                t: this.shape
            }]
        }).wait(3));

        // instrucciones
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FFFFFF").s().p("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");
        this.shape_2.setTransform(113, 136.4);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FFCC00").s().p("AJyC3QAAgOAPgFQgJgHAAgJQAAgOATgIQgQgHAAgQQAAgPANgIQAMgJAXABQAKAAAJACQADgYAVAAIAOABIgBAbIgCgBIgHAAQgJAAgCAEQALAJAAANQAAAQgMAHQgMAIgVAAIgFAAIgFAAQgJgBAAAFQAAAEAIABIAgABQASABAIAJQAIAJAAAMQAAAOgMAKQgMAIgjABQg3AAAAgZgAKTCyQAAAFAHACQAIACANAAQAMAAADgCQAEgCAAgDQAAgBAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAQgBgBgGgBIgYgBIgEAAQgKAAAAAGgAKfBnQAAANAMAAQALAAAAgNQAAgMgLAAQgMAAAAAMgAhWDPIAAgcIAOABQAQAAAAgHIgBgHIgkhcIAqAAIAQA1IARg1IAcAAIgmBsQgFALgIAHQgIAIgSAAIgTgBgAluDMIAAiCIAkAAIAAANQAHgPAVAAQASAAAKANQAKAOAAAYQAAAYgKAOQgLAOgRAAQgQAAgJgMIAAApgAlDBjQgEACAAAHIAAAdQAAAGADAEQADADAFAAQAHABACgHQADgGAAgOQAAgPgDgHQgDgGgGAAQgEAAgDADgAL4ChQgPgPAAgVQAAgXAPgPQAPgPAYAAQAYAAAPAOQAPAPAAAZIgBAFIhCAAQAAAJADAFQADAFAJgBQANAAACgLIAkACQgDAPgNAKQgNAKgXAAQgZAAgPgOgAMSBvIAbAAQAAgKgEgDQgEgDgFgBQgOABAAAQgACSCnQgHgIAAgOIAAhHIAmAAIAAA+QAAAGACADQACACAEAAQAFAAADgDQAEgFAAgFIAAg8IAmAAIAABjIgkAAIAAgRQgIATgXAAQgOAAgIgIgAAdCfQgPgPAAgVQAAgWAPgPQAQgOAYAAQAYAAAPAOQAPAPAAAWQAAAXgPAOQgPAPgZAAQgZAAgOgQgAA7BmQgDAHAAAOQAAASADAFQADAGAHAAQAJAAACgKQACgKAAgKQAAgOgDgGQgDgGgHAAQgHAAgDAGgAjvChQgPgPAAgVQAAgXAOgPQAPgPAZAAQAYAAAOAOQAPAPAAAZIAAAFIhDAAQABAJADAFQADAFAJgBQAMAAADgLIAkACQgDAPgNAKQgOAKgWAAQgZAAgPgOgAjWBvIAcAAQAAgKgEgDQgEgDgGgBQgOABAAAQgAqwCRIAegFQADAMASAAQAQgBAAgFQAAgDgDgCQgDgBgLgCQgfgEgHgIQgIgKAAgLQAAgPANgJQANgJAUAAQAlAAAJAaIgdAFQgEgIgNgBQgHABgDABQAAABgBAAQgBAAAAABQAAAAgBABQAAAAAAABQAAAEAKABQAYADAJADQAIADAHAHQAGAIAAAKQAAARgOAJQgNAKgYAAQgpAAgJgegAuUCfQgOgPAAgVQAAgWAPgPQAPgOAYAAQAZAAAPAOQAPAPAAAWQAAAXgPAOQgPAPgZAAQgZAAgPgQgAt2BmQgDAHAAAOQAAASADAFQAEAGAGAAQAJAAACgKQACgKAAgKQAAgOgDgGQgCgGgIAAQgHAAgDAGgANkCtIAAhjIAgAAIAAAUQAFgWAVAAIAFAAIAAAjIgHgBQgTAAAAAWIAAAtgAJCCtIAAg/QAAgHgDgCQgCgCgEAAQgLAAAAAOIAAA8IgmAAIAAhjIAkAAIAAANQAIgPAUAAQALgBAIAFQAHAEADAGQADAHAAARIAAA/gAHMCtIAAhjIAnAAIAABjgAGDCtIAAhKIgPAAIAAgZIAPAAIABgSQABgGAEgGQAFgGAHgCQAHgDAMAAQANAAAMACIAAAZIgOgBQgEAAgEACQgEACAAAHIAAAEIAaAAIAAAZIgaAAIAABKgAD/CtIAAhjIAgAAIAAAUQAGgWAUAAIAGAAIAAAjIgHgBQgUAAAAAWIAAAtgAmpCtIAAhjIAmAAIAABjgAnxCtIgNg2IgNA2IgcAAIgghjIAmAAIANAwIANgwIAdAAIAMAwIAOgwIAbAAIggBjgAsmCtIAAhjIAgAAIAAAUQAGgWAUAAIAGAAIAAAjIgHgBQgUAAAAAWIAAAtgAHMBCIAAgeIAnAAIAAAegAmpBCIAAgeIAmAAIAAAegAH+hWQgPgOAAgWQAAgVAPgQQAPgQAYAAQAYAAAPAPQAPAOAAAZIgBAGIhCAAQAAAKADAEQADAEAJABQANgBACgLIAkACQgDAOgNALQgNAKgXAAQgZAAgPgPgAIYiGIAbAAQAAgLgEgDQgEgEgFABQgOgBAAASgAGChlIAfgEQADALASgBQAPABAAgHQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAgBgBQgDgBgLgBQgegFgIgJQgHgIAAgMQAAgPANgJQAMgKAVAAQAkAAAKAaIgdAHQgFgKgNABQgGgBgDACQgBAAgBABQAAAAAAABQgBAAAAABQAAAAAAAAQAAAGAJAAQAZADAIADQAJADAGAIQAGAHAAALQAAAQgNAKQgOAJgYAAQgoAAgKgegAEehPQgHgIAAgPIAAhHIAmAAIAAA/QAAAGACACQACADAEAAQAFAAADgEQAEgDAAgHIAAg8IAmAAIAABkIgkAAIAAgQQgIASgXAAQgOAAgIgIgACphXQgPgOAAgVQAAgXAPgOQAQgPAYgBQAYABAPAPQAPAOAAAWQAAAWgPAPQgPAPgZAAQgZAAgOgQgADHiPQgDAFAAAQQAAARADAFQADAFAHAAQAJAAACgJQACgJAAgKQAAgOgDgHQgDgGgHAAQgHAAgDAHgAiohWQgPgOAAgWQAAgVAPgQQAPgQAYAAQAYAAAPAPQAPAOAAAZIgBAGIhCAAQAAAKADAEQADAEAJABQANgBACgLIAkACQgDAOgNALQgNAKgXAAQgZAAgPgPgAiOiGIAbAAQAAgLgEgDQgEgEgFABQgOgBAAASgAoPhWQgPgOAAgWQAAgVAPgQQAPgQAYAAQAYAAAPAPQAPAOAAAZIgBAGIhCAAQAAAKADAEQADAEAJABQANgBACgLIAkACQgDAOgNALQgNAKgXAAQgZAAgPgPgAn1iGIAbAAQAAgLgEgDQgEgEgFABQgOgBAAASgArshXQgOgOAAgVQAAgXAPgOQAPgPAYgBQAZABAPAPQAPAOAAAWQAAAWgPAPQgPAPgZAAQgZAAgPgQgArOiPQgDAFAAAQQAAARADAFQAEAFAGAAQAJAAACgJQACgJAAgKQAAgOgDgHQgCgGgIAAQgHAAgDAHgAllhPQgJgIAAgRIAAgrIgOAAIAAgaIAOAAIABgfIAlgBIAAAgIAUAAIAAAaIgUAAIAAAkQAAAIADABIAGACIALgCIAAAcQgMADgLAAQgSgBgIgHgABlhJIAAg+QAAgGgCgDQgBgDgFAAQgLAAAAAQIAAA6IglAAIAAg+QAAgMgKAAQgJAAAAAMIAAA+IgkAAIAAhkIAhAAIAAAOQAKgQASAAQATAAAJAQQAJgQAUAAQAKAAAHAFQAHAEAEAGQADAGAAANIAABEgAjshJIAAg8QAAgIgCgDQgCgDgFAAQgEAAgDADQgDABgBADIAAALIAAA4IgnAAIAAiFIAnAAIAAAuQALgOARgBQAIAAAHAEQAGADAEAEQADAFABAEQACAFAAAMIAABBgApkhJIglhkIAoAAIAOArIADAKIACgEIABgEIAPgtIAcAAIglBkgAsxhJIAAhfIgYBfIgaAAIgahfIAABfIgfAAIAAiFIA2AAIATBHIAThHIA1AAIAACFg");
        this.shape_3.setTransform(112, 76.3);

        this.play_btn = new lib.play_btn();
        this.play_btn.name = "play_btn";
        this.play_btn.parent = this;
        this.play_btn.setTransform(172, 264.6, 1, 1, 0, 0, 0, 59, 59);
        new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AkUCJIEEm9IElCsIkEG9g");
        this.shape_4.setTransform(86.1, 215.3);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#CCCCCC").s().p("AA3AmIhzhCIgCgDQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIADgDIADABIBzBDIADACIgBAEIgDADIgBAAIgDgBg");
        this.shape_5.setTransform(101.4, 188.9);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#CCCCCC").s().p("AgJATQgIgFgCgJQgCgHAEgHQAEgIAJgCQAHgCAIAEQAGAEADAJQACAHgFAIQgDAHgIACIgGABQgFAAgEgCg");
        this.shape_6.setTransform(70.7, 244.3);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#333333").s().p("AgnGTIkkirQgkgVARgeIFSo+QAQgeAlAVIEkCqQAjAVgRAfIlRI+QgLASgQAAQgLAAgPgJg");
        this.shape_7.setTransform(84.6, 217.2);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#CCCCCC").s().p("AhUCUQgCgCAAgDQAAgEACgCIBghhIAggnQgVgahEgjIhJgeQgDgBgCgDQgBgEABgDQACgDADgBQADgCADACIBKAeIABAAQBDAiAZAdQA1hKgBg3QAAgDADgDQACgDAEAAQADAAADADQACACAAAEQABA+hABWIAAAAQgQAVgVAXIhgBhQgDADgDAAQgDAAgDgDg");
        this.shape_8.setTransform(68.8, 293.7);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#333333").s().p("AArDjQhcgShQhPQhPhPgShdQgSheA2g2QA2g2BeASQBcATBPBOQBQBQASBdQASBeg3A1QgnAog/AAQgVAAgYgEg");
        this.shape_9.setTransform(78.3, 300.3);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#333333").s().p("AE3EiQgvgIglgeQgngggQgsQgHgVgFglIgJg6IAAAAQgGgfgPgWIAAAAQgRgWgYgHQgfgJgzAZQhDAggYADQggAEgfgRIABAAQgfgQgNgeIAAAAQgNgYgBgjIAAAAIgCg+IAAAAQAAgugVgiQgVglgjgEIAAAAQgNgBgNAEQgEABgDgCQgDgCgBgDQgBgDACgDQACgDADgBQAQgFAQABQAsAEAaAuIgBAAQAYAlAAAyIAAABQABAUABAqQABAfALAUIAAABQALAZAaANQAZAOAbgDQAXgDA/geQA6gcAkALQAdAIAVAdQARAXAGAjIAAgBQADANAHAuIAAABQAFAjAGAUQAOAnAkAdQAhAbArAIQADAAADADQABADAAADQgBAEgDACQgCABgCAAIgCAAg");
        this.shape_10.setTransform(32.1, 261.2);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#666666").s().p("A4O5MMAwXAAAIAEAuQAEBEgIA+QgWDCh0A3QjeBphEAtQiWBigNBqQgGAyAIBSIAQCPQAOCvhHBYQgmAvhaAjQg2AWh2AkQhoAigyAoQhGA2gHBTQgGBMATBhQAKA2AZBnIAAgBQARBWgJA6QgLBKg2A9QgyA3hjA6Qg5AghzA6IAAABQhdA0gmAwQgxA+AVBOQAQA8AmBjQAnBkALAmQASBDgJAoQgJAugyAYI3bAfg");
        this.shape_11.setTransform(160, 194.4);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_11
            }, {
                t: this.shape_10
            }, {
                t: this.shape_9
            }, {
                t: this.shape_8
            }, {
                t: this.shape_7
            }, {
                t: this.shape_6
            }, {
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.play_btn
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }]
        }).to({
            state: []
        }, 1).wait(2));

        // playagain_btn
        this.playagain_btn = new lib.welldone();
        this.playagain_btn.name = "playagain_btn";
        this.playagain_btn.parent = this;
        this.playagain_btn.setTransform(224.4, 251.5, 1, 1, 0, 0, 0, 58.9, 58.9);
        this.playagain_btn._off = true;
        new cjs.ButtonHelper(this.playagain_btn, 0, 1, 2, false, new lib.welldone(), 3);

        this.timeline.addTween(cjs.Tween.get(this.playagain_btn).wait(2).to({
            _off: false
        }, 0).wait(1));

        // well done
        this.bien = new lib.Symbol32();
        this.bien.name = "bien";
        this.bien.parent = this;
        this.bien.setTransform(588.4, -191.5, 0.859, 0.859, 0, 0, 0, 194.1, 50.4);
        this.bien._off = true;

        this.timeline.addTween(cjs.Tween.get(this.bien).wait(2).to({
            _off: false
        }, 0).wait(1));

        // gotitas
        this.instance = new lib.gotainicio3();
        this.instance.parent = this;
        this.instance.setTransform(639, 33.9, 1, 1, 0, 0, 0, 6.5, 17.3);

        this.instance_1 = new lib.gotainicio1();
        this.instance_1.parent = this;
        this.instance_1.setTransform(420, 38.8, 1, 1, 0, 0, 0, 6.5, 17.3);

        this.instance_2 = new lib.gotainicio2();
        this.instance_2.parent = this;
        this.instance_2.setTransform(555.1, 76.8, 1, 1, 0, 0, 0, 6.5, 17.3);

        this.gota8 = new lib.gota8x();
        this.gota8.name = "gota8";
        this.gota8.parent = this;
        this.gota8.setTransform(579, 33.9, 1, 1, 0, 0, 0, 6.5, 17.3);

        this.gota9 = new lib.gota9x();
        this.gota9.name = "gota9";
        this.gota9.parent = this;
        this.gota9.setTransform(627.1, 47.5, 1, 1, 0, 0, 0, 6.5, 17.3);

        this.gota5 = new lib.gota5x();
        this.gota5.name = "gota5";
        this.gota5.parent = this;
        this.gota5.setTransform(303, -33.3, 1, 1, 0, 0, 0, 6.5, 17.3);

        this.gota4 = new lib.gota4x();
        this.gota4.name = "gota4";
        this.gota4.parent = this;
        this.gota4.setTransform(245.3, 47.5, 1, 1, 0, 0, 0, 6.5, 17.3);

        this.gota3 = new lib.gota3x();
        this.gota3.name = "gota3";
        this.gota3.parent = this;
        this.gota3.setTransform(197, 84.8, 1, 1, 0, 0, 0, 6.5, 17.3);

        this.gota2 = new lib.gota2x();
        this.gota2.name = "gota2";
        this.gota2.parent = this;
        this.gota2.setTransform(157, 24.8, 1, 1, 0, 0, 0, 6.5, 17.3);

        this.gota6 = new lib.gota6x();
        this.gota6.name = "gota6";
        this.gota6.parent = this;
        this.gota6.setTransform(360, 38.8, 1, 1, 0, 0, 0, 6.5, 17.3);

        this.gota1 = new lib.gota1x();
        this.gota1.name = "gota1";
        this.gota1.parent = this;
        this.gota1.setTransform(80.9, 79.8, 1, 1, 0, 0, 0, 6.5, 17.3);

        this.gota7 = new lib.gota7x();
        this.gota7.name = "gota7";
        this.gota7.parent = this;
        this.gota7.setTransform(495.1, 76.8, 1, 1, 0, 0, 0, 6.5, 17.3);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_2
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.gota7
            }, {
                t: this.gota1
            }, {
                t: this.gota6
            }, {
                t: this.gota2
            }, {
                t: this.gota3
            }, {
                t: this.gota4
            }, {
                t: this.gota5
            }, {
                t: this.gota9
            }, {
                t: this.gota8
            }]
        }, 1).wait(2));

        // maceta con flor
        this.instance_3 = new lib.macetainicio();
        this.instance_3.parent = this;
        this.instance_3.setTransform(478.6, 291.2);

        this.macetabien = new lib.macetabien();
        this.macetabien.name = "macetabien";
        this.macetabien.parent = this;
        this.macetabien.setTransform(432.8, 292);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_3
            }]
        }).to({
            state: []
        }, 1).to({
            state: [{
                t: this.macetabien
            }]
        }, 1).wait(1));

        // sonido gota
        this.sonido = new lib.sonidogota();
        this.sonido.name = "sonido";
        this.sonido.parent = this;
        this.sonido.setTransform(-31.4, 66);
        this.sonido._off = true;

        this.timeline.addTween(cjs.Tween.get(this.sonido).wait(1).to({
            _off: false
        }, 0).wait(2));

        // maceta movil
        this.maceta = new lib.macetamovilcentro();
        this.maceta.name = "maceta";
        this.maceta.parent = this;
        this.maceta.setTransform(356.1, 292.4);
        this.maceta._off = true;

        this.timeline.addTween(cjs.Tween.get(this.maceta).wait(1).to({
            _off: false
        }, 0).to({
            _off: true
        }, 1).wait(1));

        // tablero gris
        this.tablero = new lib.tablerouniversal();
        this.tablero.name = "tablero";
        this.tablero.parent = this;
        this.tablero.setTransform(695.4, 202.9, 1, 1, 0, 0, 0, 0, 139.9);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#009999").s().p("AgnZQMAAAgyfIBPAAMAAAAyfg");
        this.shape_12.setTransform(663.2, 191.2);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#666666").s().p("AknZ4MAAAgzvIJPAAMAAAAzvg");
        this.shape_13.setTransform(696, 192.8);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.shape_13
            }, {
                t: this.shape_12
            }, {
                t: this.tablero
            }]
        }, 1).wait(2));

        // fondo bits
        this.instance_4 = new lib.fondoverdemapadebits();
        this.instance_4.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(365, 76.9, 730, 473.6);
    // library properties:
    lib.properties = {
        id: '807FA57C53FAF841ADD0A4F38BF22368',
        width: 730,
        height: 367,
        fps: 32,
        color: "#FFFFFF",
        opacity: 1.00,
        manifest: [{
                src: "images/07-maceta/07_movertouch_maceta_atlas_P_.png",
                id: "07_movertouch_maceta_atlas_P_"
            },
            {
                src: "sarasa/mouse/_16_fiu.mp3",
                id: "_16_fiu"
            },
            {
                src: "sarasa/mouse/aplauso2.mp3",
                id: "aplauso2"
            },
            {
                src: "sarasa/mouse/estrellita_jua.mp3",
                id: "estrellita_jua"
            },
            {
                src: "sarasa/mouse/Plopp.mp3",
                id: "Plopp"
            }
        ],
        preloads: []
    };



    // bootstrap callback support:

    (lib.Stage = function(canvas) {
        createjs.Stage.call(this, canvas);
    }).prototype = p = new createjs.Stage();

    p.setAutoPlay = function(autoPlay) {
        this.tickEnabled = autoPlay;
    }
    p.play = function() {
        this.tickEnabled = true;
        this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())
    }
    p.stop = function(ms) {
        if (ms) this.seek(ms);
        this.tickEnabled = false;
    }
    p.seek = function(ms) {
        this.tickEnabled = true;
        this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000);
    }
    p.getDuration = function() {
        return this.getChildAt(0).totalFrames / lib.properties.fps * 1000;
    }

    p.getTimelinePosition = function() {
        return this.getChildAt(0).currentFrame / lib.properties.fps * 1000;
    }

    an.bootcompsLoaded = an.bootcompsLoaded || [];
    if (!an.bootstrapListeners) {
        an.bootstrapListeners = [];
    }

    an.bootstrapCallback = function(fnCallback) {
        an.bootstrapListeners.push(fnCallback);
        if (an.bootcompsLoaded.length > 0) {
            for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
                fnCallback(an.bootcompsLoaded[i]);
            }
        }
    };

    an.compositions = an.compositions || {};
    an.compositions['807FA57C53FAF841ADD0A4F38BF22368'] = {
        getStage: function() {
            return exportRoot.getStage();
        },
        getLibrary: function() {
            return lib;
        },
        getSpriteSheet: function() {
            return ss;
        },
        getImages: function() {
            return img;
        }
    };

    an.compositionLoaded = function(id) {
        an.bootcompsLoaded.push(id);
        for (var j = 0; j < an.bootstrapListeners.length; j++) {
            an.bootstrapListeners[j](id);
        }
    }

    an.getComposition = function(id) {
        return an.compositions[id];
    }



})(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;