import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Personal } from 'src/app/shared/interfaces/personal.interface';
import { PersonalService } from 'src/app/shared/services/personal.service';

@Component({
  selector: 'app-personal-item',
  templateUrl: './personal-item.component.html',
  styleUrls: ['./personal-item.component.css'],
})
export class PersonalItemComponent implements OnInit {
  id: number | null = null;

  personal!: Personal;

  personalForm!: FormGroup;

  constructor(
    private personalService: PersonalService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.id = param.id ? +param.id : null;
      this.getData();
    });
  }

  async getData() {
    const controls = {
      name: [null, [Validators.required, Validators.maxLength(100)]],
      surname: [null, [Validators.required, Validators.maxLength(100)]],
      patronymic: [null, [Validators.maxLength(100)]],
      ready: [null, [Validators.required, Validators.requiredTrue]],
    };

    this.personalForm = this.fb.group(controls);

    if (this.id) {
      try {
        this.personal = await this.personalService.getPersonal(this.id);
      } catch (error) {
        console.log(error);
        return;
      }
      this.personalForm.patchValue(this.personal);
    } else {
      this.personalForm.reset();
    }
  }

  async save() {
    if (this.id) {
      const personal: Personal = this.personalForm.value;
      try {
        await this.personalService.putPersonal(this.id, personal);
        await this.getData();
      } catch (error) {
        console.log(error);
        return;
      }
    } else {
      const personal: Personal = this.personalForm.value;
      try {
        const result = await this.personalService.postPersonal(personal);
        this.router.navigate([this.router.url, result.id]);
      } catch (error) {
        console.log(error);
        return;
      }
    }
  }

  async delete() {
    try {
      await this.personalService.deletePersonal(this.id);
      this.router.navigate(['personal']);
    } catch (error) {
      console.log(error);
      return;
    }
  }
}
