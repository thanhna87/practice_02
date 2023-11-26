import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo-binding-all',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo-binding-all.component.html',
  styleUrl: './demo-binding-all.component.css'
})
export class DemoBindingAllComponent {
img:string='data:image/jpeg;base64,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'
isUnchange:boolean = false
classes = 'special'
// color:string = red
triggerButton(){
  if (!this.isUnchange)
  {
    this.isUnchange
  }else{
    !this.isUnchange
  }
}
}