import { Component, Input } from "@angular/core";
import { AppIconColor, AppIconSize } from "./app-icon.model";

@Component({
    selector: 'app-icon',
    templateUrl: './app-icon.component.html',
    styleUrls: ['./app-icon.component.scss'],
})
export class AppIconComponent {

    public iconName:string = null;
    public iconPath:string = null;

    @Input()
    public set icon(img:string){
        if(img === undefined || img === null){
            this.iconPath = null;
            this.iconName = null;
            return;
        }

        if(img.includes('.')){
            this.iconPath = img;
            this.iconName = null;
        }
        else{
            this.iconName = img;
            this.iconPath = null;
        }
    }

    @Input()
    public color:AppIconColor | string = AppIconColor.BLACK;

    @Input()
    public size:AppIconSize | string = AppIconSize.SMALL;

    public getColorCssClass():string{
        if(this.iconName !== null){
            if(this.color === AppIconColor.BLACK){
                return "text-black";
            }
            else if(this.color === AppIconColor.RED){
                return "text-red";
            }
            else if(this.color === AppIconColor.GREEN){
                return "text-green";
            }
        }
        else if(this.iconPath !== null){
            if(this.color === AppIconColor.BLACK){
                return "img-black";
            }
            else if(this.color === AppIconColor.RED){
                return "img-red";
            }
            else if(this.color === AppIconColor.GREEN){
                return "img-green";
            }
        }

        return '';
    }

    public getSizeCssClass():string{
        if(this.iconName !== null){
            if(this.size === AppIconSize.SMALL){
                return 'text-size-small';
            }
            else if(this.size === AppIconSize.BIG){
                return 'text-size-big';
            }
        }
        else if(this.iconPath !== null){
            if(this.size === AppIconSize.SMALL){
                return 'img-size-small';
            }
            else if(this.size === AppIconSize.BIG){
                return 'img-size-big';
            }
        }

        return '';
    }

    public getImgCssClass():string{
        return this.getColorCssClass() + ' ' + this.getSizeCssClass();
    }


    public getIconCssClass():string{
        return 'fa-' + this.iconName + ' ' + this.getColorCssClass() + ' ' + this.getSizeCssClass();
    }
}