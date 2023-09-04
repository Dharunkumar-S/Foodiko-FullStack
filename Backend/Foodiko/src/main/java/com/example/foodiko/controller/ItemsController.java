package com.example.foodiko.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.foodiko.model.Items;
import com.example.foodiko.service.ItemsService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@CrossOrigin("*")
public class ItemsController {
	@Autowired
	ItemsService itemsService;

	@GetMapping("/getAllItems")
	public List<Items> getAll() {
		List<Items> itemsList = itemsService.getAll();
		return itemsList;
	}

	@GetMapping("/getItem/{id}")
	public Items get(@PathVariable int id) {
		return itemsService.get(id);
	}

	@PostMapping("/saveItem")
	public Items save(@RequestBody Items i) {
		return itemsService.save(i);
	}

	@PutMapping("/updateItem/{id}")
	public Items update(@RequestBody Items i, @PathVariable int id) {
		return itemsService.update(i, id);
	}

	@DeleteMapping("/deleteItem/{id}")
	public void delete(@PathVariable int id) {
		itemsService.delete(id);
	}

	@GetMapping("/sortItems/{field}")
	public List<Items> sort(@PathVariable String field) {
		return itemsService.sort(field);
	}

	@GetMapping("/reversesortItems/{field}")
	public List<Items> rsort(@PathVariable String field) {
		return itemsService.rsort(field);
	}

	@GetMapping("/paging/{pageSize}/{offset}")
	public List<Items> paging(@PathVariable int offset, @PathVariable int pageSize) {
		return itemsService.paging(offset, pageSize);
	}

	@GetMapping("/pagingAndSorting/{field}/{pageSize}/{offset}")
	public List<Items> pagingAndSorting(@PathVariable int offset, @PathVariable int pageSize,
			@PathVariable String field) {
		return itemsService.pagingAndSorting(offset, pageSize, field);
	}

	@GetMapping("/pagingAndreverseSorting/{field}/{pageSize}/{offset}")
	public List<Items> rpagingAndSorting(@PathVariable int offset, @PathVariable int pageSize,
			@PathVariable String field) {
		return itemsService.rpagingAndSorting(offset, pageSize, field);
	}

	@Operation(summary = "Get Items by Name")
	@GetMapping("/getItemByName/{name}")
	public Items getItemByName(@PathVariable String name) {
		return itemsService.getItemByName(name);
	}

	@Operation(summary = "Delete Items by Name")
	@DeleteMapping("/deleteByName/{name}")
	public String deleteByName(@PathVariable String name) {
		int result = itemsService.deleteByName(name);
		if (result > 0)
			return "Item deleted";
		else
			return "Problem occured while deleting";
	}

	@Operation(summary = "Update Price by Name")
	@PutMapping("/updatePriceByName/{price}/{name}")
	public String updatePriceByName(@PathVariable String price, @PathVariable String name) {
		int result = itemsService.updatePriceByName(price, name);
		if (result > 0)
			return "Item updated";
		else
			return "Problem occured while updating";
	}

	@Operation(summary = "Get Items by Rating")
	@GetMapping("/getItemsByRating/{rating}")
	public List<Items> getItemsByrating(@PathVariable String rating) {
		List<Items> iList = itemsService.getItemsByRating(rating);
		return iList;
	}

}
