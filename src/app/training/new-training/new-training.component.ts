import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';

@Component({
  selector: 'app-new-traing',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  @ViewChild('sl', { static: false }) selectedEx: ElementRef;
  @Output() trainingStart = new EventEmitter<void>();
  exercises: Exercise[] = [];
  constructor(private trainingService: TrainingService) {}

  ngOnInit() {
    this.exercises = this.trainingService.getAvailableExercises();
  }
  onStartTraining() {
    this.trainingStart.emit();
    console.log(this.selectedEx);
  }
}
