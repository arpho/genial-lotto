import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-not-authorized",
  templateUrl: "./not-authorized.page.html",
  styleUrls: ["./not-authorized.page.scss"]
})
export class NotAuthorizedPage implements OnInit {
  message: string;
  image: string;
  constructor(public router: Router, public route: ActivatedRoute) {}

  goHome() {
    this.router.navigate(["home"]);
  }

  ngOnInit() {
    this.image = "../../assets/img/notcrossing.jpg";
    this.message = this.route.snapshot.paramMap.get("message");
  }
}
