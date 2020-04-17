import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {NgxGraphComponent} from '../../projects/ngx-diagram/src/lib/ngx-graph/ngx-graph.component';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

    @ViewChild('graph') graph: NgxGraphComponent;

    selection = [];

    ngOnInit() {
        this.graph.redraw();
    }

    data = {v: {}, e: {}};

    getData() {
        this.data = this.graph.getGraph();
    }

    setData() {
        this.graph.setGraph(this.data);
        this.graph.redraw();
    }

    connected(connection) {

        if (connection.source._id !== connection.target._id) {
            this.graph.newLink(connection.source, connection.target, {});
            this.graph.redraw();
        }

    }

    created(creation) {

        this.graph.newNode({_x: creation.x, _y: creation.y});
        this.graph.redraw()


    }


    selected(selection) {

        this.selection = selection;

    }

    deleteSelected() {

        this.graph.deleteSelected(this.selection);
        this.graph.redraw();
        this.selection = [];

    }

    deleteLinksBetweenSelected() {

        this.graph.deleteLinksBetweenSelected(this.selection);
        this.graph.redraw();

    }

    autoLayout() {
        this.graph.autoLayout().then(() => {
            this.graph.redraw();
        });
    }

   

}
